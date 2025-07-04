const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

// 🌐 Middlewares
app.use(cors({
  origin: 'https://prakash-portfolio-g3mx.onrender.com', // OR specify your frontend domain here
  methods: ['GET', 'POST'],
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
    console.error("❌ MongoDB Connection Error:", err);
  });
