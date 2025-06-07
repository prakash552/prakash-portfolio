// server.js

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const User = require('./models/user'); // ✅ Model import

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect('mongodb://127.0.0.1:27017/portfolio_contact', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB Connected'))
.catch(err => console.log('❌ Mongo Error:', err));

// ✅ POST API: Save form data to MongoDB
app.post('/api/add-user', async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    try {
        const newUser = new User({ name, email, message });
        await newUser.save();
        res.status(200).json({ message: 'Form submitted and saved to DB successfully' });
    } catch (error) {
        console.error('Error saving user:', error);
        res.status(500).json({ error: 'Error saving to DB' });
    }
});

// ✅ GET API: Fetch all users from MongoDB
app.get('/api/get-users', async (req, res) => {
    try {
        const users = await User.find().sort({ date: -1 }); // latest first
        res.status(200).json(users);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Error fetching users' });
    }
});

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});

