const Message = require('../models/Message');
const nodemailer = require('nodemailer');

exports.handleContactForm = async (req, res) => {
  const { name, email, message } = req.body;

  console.log("📩 Incoming Form Data:", req.body);

  try {
    // ✅ Save to MongoDB
    const newMsg = new Message({ name, email, message });
    const saved = await newMsg.save();
    console.log("✅ Saved to DB:", saved);

    // ✅ Setup Nodemailer Transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,   // your gmail id
        pass: process.env.EMAIL_PASS    // 16-digit app password
      },
      tls: {
        rejectUnauthorized: false        // 🔐 Prevent self-signed cert errors on Render
      }
    });

    // ✅ Send Email to your inbox
    const emailResult = await transporter.sendMail({
      from: email,  // sender's email
      to: process.env.TO_EMAIL,  // your inbox
      subject: `📬 New Contact Message from ${name}`,
      text: `
You have received a new message from your portfolio contact form:

👤 Name: ${name}
📧 Email: ${email}

💬 Message:
${message}
      `
    });

    console.log("📧 Email sent successfully:", emailResult);

    // ✅ Respond to frontend
    res.status(200).json({
      success: true,
      message: 'Message saved to DB and email sent successfully.'
    });

  } catch (err) {
    console.error("❌ SERVER ERROR:", err);
    res.status(500).json({
      success: false,
      message: 'Server error while processing your request.'
    });
  }
};
