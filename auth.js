const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const User = require("../models/User");

// Register a new user
async function registerUser(req, res) {
  try {
    const { email, password, firstName, lastName, userType } = req.body;

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ error: "User already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      email,
      password: hashedPassword,
      firstName,
      lastName,
      userType,
    });

    // Save the user to the database
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
}

// User login
async function loginUser(req, res) {
  try {
    const { email, password } = req.body;

    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // Compare the password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // Create a JWT token
    const token = jwt.sign({ userId: user._id }, "secretKey");

    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
}

// Forgot password
async function forgotPassword(req, res) {
  try {
    const { email } = req.body;

    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Generate a random token
    const token = Math.random().toString(36).slice(-8);

    // Store the token in the database for temporary use
    user.passwordResetToken = token;
    await user.save();

    // Send the reset password email
    const transporter = nodemailer.createTransport({
      // Configure your email provider here
      // Example for Gmail:
      service: "Gmail",
      auth: {
        user: "your-email@gmail.com",
        pass: "your-password",
      },
    });

    const mailOptions = {
      from: "your-email@gmail.com",
      to: user.email,
      subject: "Reset Your Password",
      html: `
        <p>Hello ${user.firstName},</p>
        <p>Click the following link to reset your password:</p>
        <a href="http://localhost:3000/reset-password/${token}">Reset Password</a>
      `,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(error);
        return res
          .status(500)
          .json({ error: "Failed to send reset password email" });
      }
      console.log("Email sent: " + info.response);
      res.status(200).json({ message: "Reset password email sent" });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
}

// Reset password
async function resetPassword(req, res) {
  try {
    const { token, password } = req.body;

    // Find the user by the token
    const user = await User.findOne({ passwordResetToken: token });
    if (!user) {
      return res.status(404).json({ error: "Invalid or expired token" });
    }

    // Hash the new password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Update the password and clear the reset token
    user.password = hashedPassword;
    user.passwordResetToken = undefined;
    await user.save();

    res.status(200).json({ message: "Password reset successful" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
}

module.exports = {
  registerUser,
  loginUser,
  forgotPassword,
  resetPassword,
};
