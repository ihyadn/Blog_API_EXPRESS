const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");
const {User} = require("../models");

verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];
  console.log(token);
  if (!token) {
    return res.status(403).send({
      message: "No token provided!"
    });
  }
  else
  {
  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      console.log(err);
      return res.status(401).send({
        message: "Unauthorized!"
      });
    }
    req.userId = decoded.id;
    next();
  });
}
};

isAdmin = (req, res, next) => {
  
  const user=(UserId)=>{return (User.findOne(
    {
      where:{id:UserId}
    }))
  }
  console.log(req.body.UserId);
  user(req.body.UserId).then(user => {
        if (user.role =="admin") {
         
          next();
          
          return;
        }
        else
        {
          res.status(403).send({
        message: "Require Admin Role!"
      });
        }
      })
      
      return;
    
  };



const authJwt = {
  verifyToken: verifyToken,
  isAdmin: isAdmin,
};
module.exports = authJwt;