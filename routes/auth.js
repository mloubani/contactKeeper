const express = require('express');
const router = express.Router();

// @route   GET api/auth
// @desc    Get Logged in User
// @access  Private
router.get('/', (req, res) => {
  res.send('Get logged in user');
}); //use just a '/' because everything coming from server.js '/api/auth' is being forwarded here

// @route   POST api/auth
// @desc    Auth User and get token
// @access  Public
router.post('/', (req, res) => {
  res.send('Auth User and get token');
});

module.exports = router;
