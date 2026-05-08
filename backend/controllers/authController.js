const User = require('../models/User');
const generateToken = require('../utils/generateToken');

/**
 * @desc    Register a new user
 * @route   POST /api/auth/register
 * @access  Public
 */
const registerUser = async (req, res) => {
  try {
    let { username, password } = req.body;
    username = username?.trim().toLowerCase();
    password = password?.trim();

    if (!username || !password) {
      return res.status(400).json({ message: 'Username and password are required.' });
    }

    // Check if the user already exists in the system (case-insensitive)
    const userExists = await User.findOne({ username: { $regex: `^${username}$`, $options: 'i' } });

    if (userExists) {
      return res.status(400).json({ message: 'Username is already taken. Please choose another.' });
    }

    // Initialize the new user with an empty bookmarks list
    const user = await User.create({
      username,
      password,
      bookmarks: []
    });

    if (user) {
      res.status(201).json({
        _id: user._id,
        username: user.username,
        bookmarks: user.bookmarks,
        token: generateToken(user._id)
      });
    } else {
      res.status(400).json({ message: 'Failed to create user account with the provided data.' });
    }
  } catch (error) {
    res.status(500).json({ message: 'An internal server error occurred during registration.', error: error.message });
  }
};

/**
 * @desc    Authenticate user & get token
 * @route   POST /api/auth/login
 * @access  Public
 */
const loginUser = async (req, res) => {
  try {
    let { username, password } = req.body;
    username = username?.trim().toLowerCase();
    password = password?.trim();

    if (!username || !password) {
      return res.status(400).json({ message: 'Username and password are required.' });
    }

    const user = await User.findOne({ username: { $regex: `^${username}$`, $options: 'i' } }).populate('bookmarks');

    // Validate credentials using the matchPassword method defined in the User model
    if (user && (await user.matchPassword(password))) {
      res.json({
        _id: user._id,
        username: user.username,
        bookmarks: user.bookmarks,
        token: generateToken(user._id)
      });
    } else {
      res.status(401).json({ message: 'Invalid username or password. Please check your credentials.' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Authentication failed due to a server-side error.', error: error.message });
  }
};

/**
 * @desc    Retrieve logged-in user profile
 * @route   GET /api/auth/profile
 * @access  Private
 */
const getUserProfile = async (req, res) => {
  try {
    // req.user is populated by the auth middleware
    const user = await User.findById(req.user._id).populate('bookmarks');
    if (user) {
      res.json({
        _id: user._id,
        username: user.username,
        bookmarks: user.bookmarks
      });
    } else {
      res.status(404).json({ message: 'User profile not found in our database.' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve user profile data.' });
  }
};

module.exports = { registerUser, loginUser, getUserProfile };
