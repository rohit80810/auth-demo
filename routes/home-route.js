const express = require('express');
const authMiddleware = require('../middleware/auth-middleware');

const adminMiddleware = require('../middleware/admin-middleware');
const router = express.Router();

router.get('/welcome', authMiddleware,  (req,res) => {

  const { username, userId, role} = req.userInfo
return res.json({
  message:" Welcome to home",
  username,
  userId,
  role
})
})


module.exports = router;