const express = require("express");
const authRouter = express.Router();
const User = require("../models/user.js");
const jwt = require("jsonwebtoken");

authRouter.post("/signup", (req, res, next) => {
  User.findOne({ username: req.body.username.toLowerCase() }, (err, user) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    //does that username already exist
    if (user) {
      res.status(400);
      return next(new Error("That username already taken"));
    }

    // if(req.body.secretkey === !process.env.SECRETKEY){
    //   res.status(400)
    //   return next(new Error("Must provide key to signup"))
    // }
    const newUser = new User(req.body);
    //save user in DB
    newUser.save((err, savedUser) => {
      if (err) {
        res.status(500);
        return next(err);
      }
      //generate a token
      // const token = jwt.sign(payload, signuture)
      const token = jwt.sign(savedUser.withoutPassword(), process.env.SECRET);
      //send that response that includes user info and a token
      return res.status(201).send({ user: savedUser.withoutPassword(), token });
    });
  });
});

//Login
authRouter.post("/login", (req, res, next) => {
  //does the user exist
  User.findOne({ username: req.body.username.toLowerCase() }, (err, user) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    //does the username already exist
    if (!user) {
      res.status(401);
      return next(new Error("Username or password does not exist"));
    }
    //does the users password match the saved password
    user.checkPassword(req.body.password, (err, isMatch) => {
      if (err) {
        res.status(500);
        return next(err);
      }
      if (!isMatch) {
        res.status(401);
        return next(new Error("Username or password is not correct"));
      }
      //creating the token
      const token = jwt.sign(user.withoutPassword(), process.env.SECRET);
      //and sending response with user and token
      return res.status(200).send({ user: user.withoutPassword(), token });
    });
  });
});

module.exports = authRouter;