const express = require('express');
const router = express.Router();

// This will be a full CRUD route

// @route   GET api/contacts
// @desc    Get all user's contacts
// @access  Private
router.get('/', (req, res) => {
  res.send('Get all a Users contacts');
}); //use just a '/' because everything coming from server.js '/api/contacts' is being forwarded here

// @route   POST api/contacts
// @desc    Add new Contact
// @access  Private
router.post('/', (req, res) => {
  res.send('Add a new contact');
});

// @route   PUT api/contacts/:id <-notice we specify the contact id we want to update
// @desc    Update an existing contact
// @access  Private
router.put('/:id', (req, res) => {
  res.send(`Update contact for ${req.params.id}`);
});

// @route   DELETE api/contacts/:id <-notice we specify the contact id we want to update
// @desc    DELETE an existing contact
// @access  Private
router.delete('/:id', (req, res) => {
  res.send(`Delete contact for ${req.params.id}`);
});
module.exports = router;
