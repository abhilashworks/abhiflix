const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors({ origin: ['http://localhost:3000', 'http://127.0.0.1:3000'] }));
app.use(express.json());

// Anti-spam rate limiting for contact submissions
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10,
  message: { success: false, message: 'Too many requests. Please try again later.' }
});

// Health check route
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'online', name: 'Palem Ganga Abhilash Reddy Core API' });
});

// Contact endpoint
app.post('/api/contact', contactLimiter, (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'All fields are required.' });
  }

  console.log(`[CONTACT LOG] From: ${name} (${email})`);
  console.log(`Message: ${message}`);

  return res.status(200).json({
    success: true,
    message: 'Message received successfully. Thank you for connecting!'
  });
});

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});