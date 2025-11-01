const Message = require('../models/Message');
const nodemailer = require('nodemailer');

exports.handleContactForm = async (req, res) => {
  console.log("📩 [DEBUG] Contact Form API Hit");
  console.log("📦 Request Body:", req.body);

  const { name, email, message } = req.body;

  // ✅ Check for empty fields
  if (!name || !email || !message) {
    console.error("⚠️ Missing required fields");
    return res.status(400).json({
      success: false,
      message: "All fields are required."
    });
  }

  try {
    // ✅ Save message to MongoDB
    console.log("🗄 [DEBUG] Saving message to MongoDB...");
    const newMsg = new Message({ name, email, message });
    const saved = await newMsg.save();
    console.log("✅ [DEBUG] Message saved:", saved);

    // ✅ Setup Nodemailer with SMTP host and pooling for better performance
    console.log("📧 [DEBUG] Setting up Nodemailer...");
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // TLS
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      },
      pool: true,            // Connection pooling enabled
      maxConnections: 5,
      maxMessages: 100,
      tls: { rejectUnauthorized: false }
    });

    // ✅ Send email asynchronously without await to improve response time
    console.log("📨 [DEBUG] Sending email...");
    transporter.sendMail({
      from: email,
      to: process.env.TO_EMAIL,
      subject: `📬 New Contact Message from ${name}`,
      text: `
You have received a new message from your portfolio contact form:

👤 Name: ${name}
📧 Email: ${email}

💬 Message:
${message}
      `
    }, (error, info) => {
      if (error) {
        console.error("❌ Email sending failed:", error);
      } else {
        console.log("✅ [DEBUG] Email sent:", info.response);
      }
    });

    // ✅ Send success response immediately
    res.status(200).json({
      success: true,
      message: 'Message saved to DB and email sent successfully.'
    });

  } catch (err) {
    console.error("❌ [DEBUG] SERVER ERROR:", err);
    res.status(500).json({
      success: false,
      message: 'Server error while processing your request.',
      error: err.message // for debugging in frontend
    });
  }
};
