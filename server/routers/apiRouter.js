const express = require('express');
const router = express.Router(); 
const dbController = require('../controllers/dbController');
const userController = require('../controllers/userController');
const cookieController = require('../controllers/cookieController');

// dbController is an array of all of our controller functions, NOT an object with controller methods

router.get('/', dbController, (req, res) => {
  return res.status(200).json(res.locals.data)
});

// route to login
router.get('/login', userController, (req, res) => {
  return res.status(200).json(res.locals.login);
})

//route to signup
router.post('/signup', userController, (req, res) => {
  return res.status(200).json(res.locals.signup);
})

module.exports = router;