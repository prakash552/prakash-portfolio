const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

// 🌐 CORS Setup - allow local & production
const allowedOrigins = [
  'https://prakash-portfolio-g3mx.onrender.com', // Production
  'http://localhost:3000' // Local development
];

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps, curl, Postman)
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST'],
  optionsSuccessStatus: 200
}));

app.use(express.json());

// 📦 Routes
const contactRoutes = require('./routes/contactRoutes');
app.use('/api/contact', contactRoutes);

// 🔁 Choose Mongo URI based on environment
const isProduction = process.env.NODE_ENV === 'production';
const MONGO_URI = isProduction
  ? process.env.MONGO_URI_ATLAS
  : process.env.MONGO_URI_LOCAL;

// ⚡ Connect to MongoDB (Atlas or Local)
mongoose.connect(MONGO_URI)
  .then(() => {
    console.log("✅ Connected to MongoDB");

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, '0.0.0.0', () => {
      console.log(`✅ Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB Connection Error:", err.message);
    process.exit(1);
  });

// 🛠 Test DB Endpoint (Optional)
app.get('/api/test-db', async (req, res) => {
  try {
    await mongoose.connection.db.admin().ping();
    res.json({ success: true, message: "✅ MongoDB connected successfully!" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});
