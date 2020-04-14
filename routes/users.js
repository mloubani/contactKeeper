const express = require('express');
const router = express.Router();

// @route   POST api/users
// @desc    Register a user
// @access  Public
router.post('/', (req, res) => {
  res.send('Register a user');
}); //use just a '/' because everything coming from server.js '/api/users' is being forwarded here

module.exports = router;
