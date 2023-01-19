const {Profile} = require('../models/authModels')
const bcrypt = require('bcrypt')

const userController = {};
const WORKFACTOR = 12;

userController.getBcrypt = (req, res, next) => {
  const pass = req.body.password;
  bcrypt.hash(pass, WORKFACTOR)
      .then(hash => {
          req.body.password = hash;
          res.locals.user = req.body;
          return next();
      })
}

userController.createUser = async (req, res, next) => {
  const {username, password} = res.locals.user;
  const hashedPass = password;
  try {
    const user = await Profile.findOne({ username: username });
    if (!user) {
      const newUser = await Profile.create({ username: username, password: hashedPass });
      return next()
    }
    else {
      res.status(400).json('user already exists')
    }
  }
  catch (err) {
    const error = {
      log: 'Express error handler caught error in userContoller.createUser',
      status: 500,
      message: { err: 'An error occurred' },
    }
    next(error);
  }
}

userController.verifyUser = async (req, res, next) => {
  const { username, password } = req.body;
  try {
    const response = await Profile.findOne({ username: username });
 
    const foundUser = await Profile.findOne({ username })
    const databasePw = foundUser.password;
    
    const verfied = await bcrypt.compare(password, databasePw);
      if (verfied) {
        res.locals.user = foundUser;
        return next();
      } else return res.status(403).json('err in verifyUser controller');
  }
  catch (err) {
    const error = {
      log: 'Express error handler caught error in userContoller.verifyUser',
      status: 500,
      message: { err: 'An error occurred' },
    }
    next(error);
  }
}


module.exports = userController;