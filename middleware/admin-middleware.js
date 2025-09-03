const jwt = require("jsonwebtoken");

const isAdminUser = (req, res, next) => {
  try {
    if (req.userInfo.role !== "admin") {
      res.status(403).json({
        success: false,
        message: "Not admin ",
      });
    }

    next();
  } catch (error) {
    next(error);
  }
};

module.exports = isAdminUser;
