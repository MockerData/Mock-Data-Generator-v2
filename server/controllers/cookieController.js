const cookieController = {};
const Profile = require('../models/authModels');

cookieController.setCookie = (req, res, next) => { 
  const temp = Math.floor(Math.random() * 1000000);
  res.cookie('secret' , temp, {httpOnly: true});
  return next();
}


cookieController.setSSIDCookie = (req, res, next) => {
  res.cookie('ssid', res.locals.user._id, {httpOnly: true});
  console.log('res.locals', res.locals.user.id)
  return next();
}



module.exports = cookieController;

