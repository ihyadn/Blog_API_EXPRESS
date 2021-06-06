const {User} = require("../models");
const config = require("../config/auth.config");
const fetch = require("node-fetch");

var jwt = require("jsonwebtoken");

exports.signup = (req, res) => {
  console.log("sigin up");
 fetch('http://localhost:3000/users/users', {
        method: 'POST',
        dataType: 'JSON',
        body: JSON.stringify(req.body),
        headers: {
            "Content-Type": "application/json"
            }})
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

exports.signin = (req, res) => {
    console.log(req.body.email);
  User.findOne({
    where: {
      email: req.body.email
    }
  })
    .then(user => {
      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }
    
      var passwordIsValid = user.password===req.body.password;

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!"
        });
      }

      var token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400 // 24 hours
      });
        
        res.send({
          id: user.id,
          username: user.username,
          email: user.email,
          role: user.role,
          accessToken: token
        
        },
        )
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
})
}