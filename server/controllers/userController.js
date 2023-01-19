const Profile = require('../models/authModels')
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
    next(err);
  }
}

userController.verifyUser = async (req, res, next) => {
  const { username, password } = req.body;
  try {
    const response = await Profile.findOne({ username: username });
    console.log(response);
    // res.locals.oneUser = response;
    const foundUser = await Profile.findOne({ username })
    const databasePw = foundUser.password;
    console.log('databasepw', databasePw)
    const verfied = await bcrypt.compare(password, databasePw);
    if (verfied) {
      res.locals.user = foundUser;
      console.log('reqbody', foundUser);
      return next();
    } else return res.status(403).json('err in verifyUser controller');
  }
  catch (err) {
    next(err);
  }
}


module.exports = userController;