const express = require('express');
const router = express.Router(); 

const {makeArray, getFirstNames, getMiddleNames, getLastNames, getCountry} = require('../controllers/dbController')
const {getEmails, getPhoneNumbers} = require('../controllers/otherDataController')
const {isLoggedIn, startSession} = require('../controllers/sessionController')
const {setCookie, setSSIDCookie} = require('../controllers/cookieController')
const {getBcrypt, createUser, verifyUser} = require('../controllers/userController')

const Profile = require('../models/authModels')
const controllers = [makeArray, getFirstNames, getMiddleNames, getLastNames, getCountry, getEmails, getPhoneNumbers]

router.get('/', controllers, (req, res) => {
  return res.status(200).json(res.locals.data)
});

//route to signup
router.post('/signup', 
  getBcrypt, 
  createUser, 
  setSSIDCookie, 
  (req, res) => {
    return res.status(200).json('signup successful');
})

// route to login
router.get('/login', 
  verifyUser,
  setSSIDCookie, 
  (req, res) => {
  return res.status(200).json('login successful');
})

module.exports = router;