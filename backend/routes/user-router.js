const router = require("express").Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
let User = require("../models/user-model");

// Signup Route
router.post("/signup", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check if the user already exists in the database
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Create a new user and save to the database
    const newUser = new User({ username, email, password });
    await newUser.save();

    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
});

// Login Route
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the user exists in the database
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Compare the provided password with the hashed password in the database
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Create and send a JWT token for the user
    const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, {
      expiresIn: "1h", // Set the token expiry time
    });

    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
});

// Logout Route
router.post("/logout", (req, res) => {
  // Get the user"s token from the request headers
  const token = req.headers.authorization;

  // If the token is not present or is empty, the user is not logged in
  if (!token) {
    return res.status(401).json({ message: "User is not logged in" });
  }

  try {
    // Decode the token to get the user id
    const decodedToken = jwt.verify(token, process.env.SECRET_KEY);

    // The token is valid, but will mark it as expired by setting its expiration to the current time
    const expirationTime = Math.floor(Date.now() / 1000);
    const expiredToken = jwt.sign({ userId: decodedToken.userId }, process.env.SECRET_KEY, {
      expiresIn: expirationTime,
    });

    // Send a response to the client to indicate successful logout
    res.json({ message: "User logged out successfully" });
  } catch (error) {
    // If the token is invalid or expired, it"s already considered as logged out
    return res.status(401).json({ message: "User is not logged in" });
  }
});


module.exports = router;
