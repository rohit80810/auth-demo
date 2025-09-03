// errorHandler.js
const errorHandler = (err, req, res, next) => {
  console.error("Error Handler:", err);

  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || "Something went wrong. Please try again.",
  });
};

module.exports = errorHandler;