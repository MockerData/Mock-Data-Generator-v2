const db =  ; 
// destructure model to get username and password

const userController = {};
const bcrypt = require('bcrypt')
const WORKFACTOR = 12;

usersController.getBcrypt = (req, res, next) => {
  const pass = req.body.password;
  bcrypt.hash(pass, WORKFACTOR)
      .then(hash => {
          req.body.password = hash;
          res.locals.user = req.body;
          return next();
      })
}

userController.createUser = async (req, res, next) {
  
}

userController.verifyUser = async (req, res, next) => {
  console.log('req.body', req.body);
  const { username, password } = req.body;
  try {
    const response = await db.findOne({ username: username });   
    console.log(response);
    // res.locals.oneUser = response;
    const databasePw = res.locals.oneUser.password;
    const verfied = await bcrypt.compare(password, databasePw);
    if (verfied) {
      console.log(verfied);
      return next();
    } else return res.status(403).json('err in verifyUser controller');
  }
  catch (err) {
    // error 
  }
}


module.exports = userController;