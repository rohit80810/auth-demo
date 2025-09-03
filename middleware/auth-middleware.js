const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  console.log("Auth header ", authHeader);
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    res.status(401).json({
      success: false,
      message: "Not authorized ",
    });
  }
  //Decode token
  try {
    const decodedTokenInfo = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.userInfo = decodedTokenInfo;
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = authMiddleware;
