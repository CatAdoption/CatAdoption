var db = require('./../database/index.js');
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
var UserModel = db.UserModel; 
const jwt = require("jsonwebtoken");
// create user for sign up 
exports.createUser = (req, res, next) => {
    console.log(req.body)
    UserModel.find({ email: req.body.email })
      .exec()
      .then(user => {
        if (user.length >= 1) {
          return res.status(409).json({
            message: "Mail exists"
          });
        } else {
          bcrypt.hash(req.body.password, 10, (err, hash) => {
            if (err) {
              return res.status(500).json({
                error: err
              });
            } else {
              const UserModelDoc= new UserModel({
                _id: new mongoose.Types.ObjectId(),
                email: req.body.email,
                firstName:req.body.firstName,
                lastName:req.body.firstName,
                password: hash
              });
              UserModelDoc
                .save()
                .then(result => {
                  console.log(result);
                  res.status(201).json({
                    message: "User created"
                  });
                })
                .catch(err => {
                  console.log(err);
                  res.status(500).json({
                    error: err
                  });
                });
            }
          });
        }
      });
  }


  // login check 
  process.env.SECRET_KEY = 'secret'
exports.loginUser = (req, res, next) => {
    UserModel.find({ email: req.body.email })
      .exec()
      .then(user => {
        if (user.length < 1) {
          return res.status(401).json({
            message: "The User doesn't Not Exists"
          });
        }
        bcrypt.compare(req.body.password, user[0].password, (err, result) => {
          if (err) {
            return res.status(401).json({
              message: "The Password Not Correct"
            });
          }
          if (result) {
            const token = jwt.sign(
              {
                email: user[0].email,
                userId: user[0]._id
              },
              process.env.SECRET_KEY,
              {
                  expiresIn: "1h"
              }
            );
            return res.status(200).json({
              message: "Auth successful",
              token: token
            });
          }
          res.status(401).json({
            message: "The Password Not Correct"
          });
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
  }
  
//   exports.check = (req, res, next) => {
//     // console.log(req.headers.authorization)
//     try {
//         const token = req.headers.authorization.split(" ")[1];
//         const decoded = jwt.verify(token, process.env.SECRET_KEY);
//         console.log(decoded)
//         req.userData = decoded;
//         next();
//     } catch (error) {
//         return res.status(401).json({
//             message: 'Auth failed'
//         });
//     }
// };