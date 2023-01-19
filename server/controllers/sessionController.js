const {Session} = require('../models/authModels');

const sessionController = {};

sessionController.isLoggedIn = (req, res, next) => {
  if (req.cookies.ssid) {
    const { ssid } = req.cookies;
    Session.findOne({ cookieId: ssid })
      .then((session) => {
        if (session) {
          console.log('isloggin:', session)
          res.locals.user = session;
          return next();
        }
        return next();
      })
      .catch((err) => {
        const newErr = {
          log: 'Error in isLoggedIn',
          message: { err: 'Error: problem finding session' }
        }
        return next(newErr);
      })
  } 
  if (req.query.quantity <= 15) return next();
  else return res.status(400).json('Please sign up to access larger data quantity');
  // return res.status(400).json('error' );  
}

sessionController.startSession = (req, res, next) => {
  const { _id } = res.locals.user;
  console.log('startsession1 res.locals.user', res.locals.user);
  Session.create({cookieId: _id})
    .then((session) => {
      res.locals.user = session;
      console.log('startsession2:', session);
      return next();
    })
    .catch((err) => {
      const newErr = {
        log: 'Error in startSession',
        message: { err: 'Error: problem creating session' }
      }
      return next(newErr);
    })
    
}

module.exports = sessionController;
