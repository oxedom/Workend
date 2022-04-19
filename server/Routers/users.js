const express = require("express");
const router = express.Router();
const logic = require("../models/bl/user_BL");
const mongoose = require("mongoose");
const User = require('../models/UsersModel')
const passport = require("passport");
const utils = require("../lib/utils");

router.get(
  "/protected",
  passport.authenticate("jwt", { session: false }),
  (req, res, next) => {
    res.status(200).json({
      success: true,
      msg: "You are successfully authenticated to this route!",
    });

    
  }
);

// Validate an existing user and issue a JWT
router.post("/login", function (req, res, next) {
  User.findOne({ Username: req.body.username })
    .then((user) => {
      if (!user) {
        return res
          .status(401)
          .json({ success: false, msg: "could not find user" });
      }

      // Function defined at bottom of utils.js, validate the password with crypto hash and salt.
      const isValid = utils.validPassword(
        req.body.password,
        user.hash,
        user.salt
      );

      if (isValid) {
        const tokenObject = utils.issueJWT(user);

        res.status(200).json({
          success: true,
          user: user,
          token: tokenObject.token,
          expiresIn: tokenObject.expires,
        });
      } else {
        res
          .status(401)
          .json({ success: false, msg: "you entered the wrong password" });
      }
    })
    .catch((err) => {
      next(err);
    });
});

// Register a new subscriber
router.post("/register", function (req, res, next) {
  const saltHash = utils.genPassword(req.body.password);
  const salt = saltHash.salt;
  const hash = saltHash.hash;
  const newUser = new User({
    Username: req.body.username,
    hash: hash,
    salt: salt,
    email: req.body.email,
    fname: req.body.fname,
    lname: req.body.lname,
    department: req.body.lname,
    birthday: req.body.birthday,
  });

  try {
    newUser.save().then((user) => {
      const jwt = utils.issueJWT(user);
      res.json({
        success: true,
        user: user,
        token: jwt.token,
        expiresIn: jwt.expires,
      });
    });
  } catch (err) {
    res.json({ success: false, msg: err });
  }
});

//ie: http://localhost:8000/api/user + JSONbody of user
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
  let status = await logic.addAUser(req.body);
  console.log(req.body);
  return res.json(status);
});

//Returns all Users
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
  let status = await logic.getAllUser();
  return res.json(status);
});

//Returns a user (add ID after / ie: http://localhost:8000/api/user/1421421421
router.get(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
  let status = await logic.getUserByID(req.params.id);
  return res.json(status);
});

//Deletes a user by id ie: http://localhost:8000/api/user/1421421421
router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
  let status = await logic.deleteUserByID(req.params.id);
  return res.json(status);
});

//Updates a user by ID and takes as JSON a user OBJ
//ie: http://localhost:8000/api/user/1421421421 + JSON in body
router.put(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
  let status = await logic.updateUserbyID(req.params.id, req.body);
  return res.json(status);
});

module.exports = router;
