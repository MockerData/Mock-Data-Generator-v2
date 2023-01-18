const firstNames = require('../../data/firstNames.json');
const lastNames = require('../../data/lastNames.json');
const middleNames = require('../../data/middleNames.json');
const countries  = require('../../data/countries.json');


function rng (length){
  return Math.floor(Math.random()*length)
}

const jsonController  = {};


function rng (length){
  return Math.floor(Math.random()*length)
}

jsonController.makeArray = (req, res, next) =>{
  res.locals.data = []
  return next();
}

jsonController.getFirstName = (req, res, next) => {
  const { firstName, fullName, fullNameMiddle, quantity } = req.query;
  if (!firstName && !fullName && !fullNameMiddle) return next();
  try{
    const tempArr = [...res.locals.data];
    console.log(firstNames[rng(firstNames.length)])
    for(let i = 0; i < quantity; i++){
      newObj = {
        firstName: firstNames[[rng(firstNames.length)]]
      }
      tempArr.push(newObj);
    }
    res.locals.data = tempArr;
    return next();
  }
  catch{
    return next({
      log: 'error in getFirstNames',
          message: { err: 'problem getting first Names at this time'}
    })
  }
}

jsonController.getMiddleName = (req, res, next) => {
  const {fullNameMiddle, quantity } = req.query
  if (!fullNameMiddle) return next();
  try{
    const tempArr = [...res.locals.data];
    console.log(middleNames[rng(middleNames.length)])
    for(let i = 0; i < quantity; i++){
      tempArr[i]['middleName'] = middleNames[[rng(middleNames.length)]];
    }
    res.locals.data = tempArr;
    return next();
  }
  catch{
    return next({
      log: 'error in getMiddleName',
          message: { err: 'problem getting middle Names at this time'}
    })
  }
}


jsonController.getlastName = (req, res, next) => {
  const {fullNameMiddle, quantity } = req.query
  if (!fullNameMiddle) return next();
  try{
    const tempArr = [...res.locals.data];
    console.log(middleNames[rng(middleNames.length)])
    for(let i = 0; i < quantity; i++){
      tempArr[i]['middleName'] = middleNames[[rng(middleNames.length)]];
    }
    res.locals.data = tempArr;
    return next();
  }
  catch{
    return next({
      log: 'error in getMiddleName',
          message: { err: 'problem getting middle Names at this time'}
    })
  }
}

module.exports = jsonController