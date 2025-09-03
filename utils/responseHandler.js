// utils/responseHandler.js
const sendErrorResponse = (res, statusCode = 500, message = "Something went wrong. Please try again.") => {
  return res.status(statusCode).json({
    success: false,
    message,
  });
};

const sendSuccessResponse = (res, statusCode = 200, message = "Success", data = {}) => {
  return res.status(statusCode).json({
    success: true,
    message,
    ...data,
  });
};

module.exports = { sendErrorResponse, sendSuccessResponse };