// controllers/userController.js

const User = require("../Models/User");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

const generateToken = () => {
  const chars =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let token = "";
  for (let i = 0; i < 10; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    token += chars[randomIndex];
  }
  return token;
};

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "arunramasamy46@gmail.com",
    pass: "qkzjcoksjuzyogoi",
  },
});

const userController = {
  login: async (req, res) => {
    const { email, password } = req.body;

    try {
      const user = await User.findOne({ email });

      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      if (user.password !== password) {
        return res.status(401).json({ error: "Invalid password" });
      }

      // Generate JWT token
      const token = jwt.sign({ email }, "your-secret-key", { expiresIn: "1h" });

      res.json({ token });
    } catch (err) {
      console.error("Error finding user:", err);
      res.status(500).json({ error: "Internal server error" });
    }
  },

  registerUser: async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required" });
    }

    try {
      const existingUser = await User.findOne({ email });

      if (existingUser) {
        return res.status(409).json({ error: "User already exists" });
      }

      const user = new User({
        email,
        password,
      });

      await user.save();
      res.json({ message: "User created successfully" });
    } catch (err) {
      console.error("Error creating user:", err);
      res.status(500).json({ error: "Internal server error" });
    }
  },

  forgotPassword: async (req, res) => {
    const { email } = req.body;

    try {
      const user = await User.findOne({ email });

      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      const token = generateToken(); // Assuming you have implemented the `generateToken` function.
      user.token = token;

      await user.save();

      const mailOptions = {
        from: "arunramasamy46@gmail.com",
        to: email,
        subject: "Password Reset",
        text: `Click the following link to reset your password: http://localhost:5000/reset-password?token=${token}`,
      };

      transporter.sendMail(mailOptions, (err) => {
        if (err) {
          console.error("Error sending email:", err);
          return res.status(500).json({ error: "Internal server error" });
        }

        res.json({ message: "Password reset link sent successfully" });
      });
    } catch (err) {
      console.error("Error updating user:", err);
      res.status(500).json({ error: "Internal server error" });
    }
  },

  resetPassword: async (req, res) => {
    const { token, password } = req.body;

    try {
      const user = await User.findOne({ token });

      if (!user) {
        return res.status(404).json({ error: "Invalid token" });
      }

      user.password = password;
      user.token = "";

      await user.save();
      res.json({ message: "Password reset successful" });
    } catch (err) {
      console.error("Error updating user:", err);
      res.status(500).json({ error: "Internal server error" });
    }
  },
};

module.exports = userController;
