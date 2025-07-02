const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config(); // ✅ Load env variables
const User = require('./models/user');

const app = express();
const PORT = process.env.PORT || 3000;

// ✅ Middleware
app.use(cors({
  origin: 'https://portfolioprakas.netlify.app',
  methods: ['GET', 'POST'],
  credentials: true
}));
app.use(express.json());

// ✅ MongoDB Atlas connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('✅ MongoDB Connected'))
  .catch(err => console.error('❌ MongoDB Connection Error:', err));

// ✅ POST API: Save contact form data
app.post('/api/add-user', async (req, res) => {
  console.log("📥 Contact form received:", req.body);

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const newUser = new User({ name, email, message });
    await newUser.save();
    console.log("✅ Data saved to MongoDB Atlas");
    res.status(200).json({ message: 'Form submitted and saved to DB successfully' });
  } catch (error) {
    console.error('❌ Error saving user:', error);
    res.status(500).json({ error: 'Error saving to DB' });
  }
});

// ✅ GET API: Fetch all messages
app.get('/api/get-users', async (req, res) => {
  try {
    const users = await User.find().sort({ date: -1 });
    res.status(200).json(users);
  } catch (error) {
    console.error('❌ Error fetching users:', error);
    res.status(500).json({ error: 'Error fetching users' });
  }
});

// ✅ Root test route
app.get('/', (req, res) => {
  res.send('🎉 Backend API is running!');
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
