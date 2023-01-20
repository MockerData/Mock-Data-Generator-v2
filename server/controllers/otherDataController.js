
const otherDataController  = {}

function rng (number) {
  return Math.floor(Math.random()*number);
}

otherDataController.getEmails = (req, res, next) => {
  try{
    const { email, quantity } = req.query;
    if (!email) return next();
    const tempArr = [...res.locals.data];
    for (let i = 0; i < quantity; i++) {
      let emailString = '';
      const emailLength = Math.floor(Math.random() * 31 + 5);
      
      for (let i = 0; i < emailLength; i++) {
        emailString += String.fromCharCode(Math.floor(Math.random() * 123 + 48));
      }
      
      emailString = emailString.replace(/[^0-9A-Za-z]/g, '');
      emailString += '@whalepanda.com';
      
      if (tempArr[i]) {
        tempArr[i].email = emailString;
      } else {
        const newObj = {
          email: emailString
        }
        tempArr.push(newObj);
      }
    }
    res.locals.data = tempArr;
    return next();
  }
  catch {((err) => {
    const newErr = {
        log: 'error in getEmails',
        message: { err: 'problem getting emails at this time'}
    }
    return next(newErr);
  })
  }
};
  
otherDataController.getPhoneNumbers = (req, res, next) => {
  try {
    const { phoneNumber, quantity } = req.query;
    if (!phoneNumber) return next();
    const tempArr = [...res.locals.data];
    
    for (let i = 0; i < quantity; i++) {
      let phoneNumString = '';
      for (let i = 0; i < 10; i++) {
        if (i===0) phoneNumString += '(';
        phoneNumString += Math.floor(Math.random() * 10);
        if (i===2) phoneNumString += ') ';
        if (i===5) phoneNumString += '-';
      }
      if (tempArr[i]) {
        tempArr[i].phoneNumber = phoneNumString
      } else {
        const newObj = {
          phoneNumber: phoneNumString
        }
        tempArr.push(newObj);
      }
    }
    res.locals.data = tempArr;
    return next();
  }
  catch {((err) => {
    const newErr = {
        log: 'error in getPhoneNumbers',
        message: { err: 'problem getting phone numbers at this time'}
    }
    return next(newErr);
    })
  }
};

otherDataController.getAge = (req, res, next) => {
  try {
    const { age, quantity } = req.query;
    if (!age) return next();
    const tempArr = [...res.locals.data];
    
    for (let i = 0; i < quantity; i++) {
      let ageNum = rng(100);
      
      if (tempArr[i]) {
        tempArr[i].age = ageNum;
      } else {
        const newObj = {
          age: ageNum
        }
        tempArr.push(newObj);
      }
    }
    res.locals.data = tempArr;
    return next();
    }
    
  catch {((err) => {
    const newErr = {
        log: 'error in getAge',
        message: { err: 'problem getting age at this time'}
    }
    return next(newErr);
    })
  }
};

otherDataController.getTotalPurchaseVal = (req, res, next) => {
  try{
    const { totalPurchaseVal, quantity } = req.query;
    if (!totalPurchaseVal) return next();
    const tempArr = [...res.locals.data];
    
    for (let i = 0; i < quantity; i++) {
      let totalPurchaseValLoop = rng(10000).toFixed(2);
      
      if (tempArr[i]) {
        tempArr[i].totalPurchaseVal = totalPurchaseValLoop;
      } else {
        const newObj = {
          totalPurchaseVal: totalPurchaseValLoop
        }
        tempArr.push(newObj);
      }
    }
    res.locals.data = tempArr;
    return next();
  }
  catch {((err) => {
    const newErr = {
        log: 'error in getTotalPurchaseVal',
        message: { err: 'problem getting total purchase value at this time'}
    }
    return next(newErr);
  })
  }
};

otherDataController.getNumOfPurchases = (req, res, next) => {
  try {
    const { numOfPurchases, quantity } = req.query;
    if (!numOfPurchases) return next();
    const tempArr = [...res.locals.data];
    
    for (let i = 0; i < quantity; i++) {
      
      let numOfPurchasesLoop = rng(1000);
    
      if (tempArr[i]) {
        tempArr[i].numOfPurchases = numOfPurchasesLoop
      } else {
        const newObj = {
          numOfPurchases: numOfPurchasesLoop
        }
        tempArr.push(newObj);
      }
    }
    res.locals.data = tempArr;
    return next();
  }
  catch {((err) => {
    const newErr = {
        log: 'error in getNumOfPurchases',
        message: { err: 'problem getting number of purchases at this time'}
    }
    return next(newErr);
    })
  }
  };

  otherDataController.getFrequency = (req, res, next) => {
    try{
      const { frequency, quantity } = req.query;
      if (!frequency) return next();
      const tempArr = [...res.locals.data];
      
      for (let i = 0; i < quantity; i++) {
        const possFreq = ['never', 'once', 'daily', 'monthly', 'yearly'];
        let frequencyLoop = possFreq[rng(5)];
        
        if (tempArr[i]) {
          tempArr[i].frequency = frequencyLoop;
        } else {
          const newObj = {
            frequency: frequencyLoop
          }
          tempArr.push(newObj);
        }
      }
      res.locals.data = tempArr;
      return next();
    }
    catch {((err) => {
      const newErr = {
          log: 'error in getFrequency',
          message: { err: 'problem getting frequency at this time'}
      }
      return next(newErr);
    })
    }
  };

  otherDataController.getGender = (req, res, next) => {
    try {
      const { gender, quantity } = req.query;
      if (!gender) return next();
      const tempArr = [...res.locals.data];
      
      for (let i = 0; i < quantity; i++) {
        
        const genders = ["male", "female"];
        let genderRoll =  rng(2)
        
        if (tempArr[i]) {
          tempArr[i].gender = genders[genderRoll]
        } else {
          const newObj = {
            gender: genders[genderRoll]
          }
          tempArr.push(newObj);
        }
      }
      res.locals.data = tempArr;
      return next();
    }
    catch {((err) => {
      const newErr = {
          log: 'error in getGender',
          message: { err: 'problem getting gender at this time'}
      }
      return next(newErr);
      })
    }
    };
    
  otherDataController.postalCode = (req, res, next) => {
    try {
      const { postalCode, quantity } = req.query;
      if (!postalCode) return next();
      const tempArr = [...res.locals.data];
      
      for (let i = 0; i < quantity; i++) {
        let postalCodeString = '';
        for (let i = 0; i < 5; i++) {
          postalCodeString += rng(10);
        }
        const postalCodeNum = Number(postalCodeString);
        if (tempArr[i]) {
          tempArr[i].postalCode = postalCodeNum
        } else {
          const newObj = {
            postalCode: postalCodeNum
          }
          tempArr.push(newObj);
        }
      }
      res.locals.data = tempArr;
      return next();
    }
    catch {((err) => {
      const newErr = {
          log: 'error in postalCode',
          message: { err: 'problem getting postal code at this time'}
      }
      return next(newErr);
      })
    }
  };


  module.exports = otherDataController;