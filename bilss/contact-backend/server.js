require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Define Contact Schema
const contactSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  phone: String,
  email: String,
  message: String,
  createdAt: { type: Date, default: Date.now },
});

const Contact = mongoose.model("Contact", contactSchema);

// Nodemailer Transporter (For Sending Emails)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, // Your admin email
    pass: process.env.EMAIL_PASS, // App password for Gmail
  },
});

// Contact Form Route
app.post("/api/contact", async (req, res) => {
  const { firstName, lastName, phone, email, message } = req.body;

  // Basic Validation
  if (!firstName || !lastName || !phone || !email || !message) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    // Save contact details to MongoDB
    const newContact = new Contact({ firstName, lastName, phone, email, message });
    await newContact.save();

    // Email to Admin
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: "techthamu@gmail.com", // Admin Email
      subject: "📩 New Contact Form Submission - Blissful Occasions",
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <blockquote style="border-left: 4px solid #007bff; padding-left: 10px;">${message}</blockquote>
        <hr>
        <p><em>This message was received from the website contact form.</em></p>
      `,
    };

    // Confirmation Email to User
    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "📩 Thank You for Contacting Blissful Occasions!",
      html: `
        <h2>Hi ${firstName},</h2>
        <p>Thank you for reaching out to <strong>Blissful Occasions</strong>! We have received your message and will get back to you shortly.</p>
        <h3>Your Submitted Details:</h3>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <blockquote style="border-left: 4px solid #28a745; padding-left: 10px;">${message}</blockquote>
        <hr>
        <p>Best regards,<br><strong>Blissful Occasions Team</strong></p>
      `,
    };

    // Send Emails
    await transporter.sendMail(adminMailOptions); // Send email to Admin
    await transporter.sendMail(userMailOptions); // Send confirmation email to User

    res.json({ message: "Message sent successfully and saved in database!" });
  } catch (error) {
    console.error("❌ Error:", error);
    res.status(500).json({ message: "Failed to process your request." });
  }
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
