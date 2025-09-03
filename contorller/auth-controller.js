const User = require("./../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const ApiError = require("../utils/apiError");

/**
 * @desc    Register a new user
 * @route   POST /api/auth/register
 * @access  Public
 */
const registerUser = async (req, res, next) => {
  try {
    const { username, email, password, role } = req.body;

    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      throw new ApiError(400, "User already registered");
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      role: role || "user",
    });

    await newUser.save();

    return res.status(201).json({
      success: true,
      message: "New user created successfully",
    });
  } catch (error) {
    next(error); // pass error to middleware
  }
};

/**
 * @desc    Login user and return JWT token
 * @route   POST /api/auth/login
 * @access  Public
 */
const loginUser = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (!user) throw new ApiError(400, "User does not exist");

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) throw new ApiError(400, "Invalid credentials");

    const accessToken = jwt.sign(
      { userId: user.id, username: user.username, role: user.role },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "150m" }
    );

    return res.status(200).json({
      success: true,
      message: "Logged in successfully",
      accessToken,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Change password for logged-in user
 * @route   PUT /api/auth/change-password
 * @access  Private
 */
const changePassword = async (req, res, next) => {
  try {
    const userId = req.userInfo.userId;
    const { oldPassword, newPassword } = req.body;

    const user = await User.findById(userId);
    if (!user) throw new ApiError(404, "User not found");

    const isMatch = await bcrypt.compare(oldPassword, user.password);
    if (!isMatch) throw new ApiError(400, "Old password is incorrect");

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(newPassword, salt);

    await user.save();

    return res.status(200).json({
      success: true,
      message: "Password changed successfully",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  registerUser,
  loginUser,
  changePassword,
};
