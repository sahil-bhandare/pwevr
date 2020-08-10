const express = require("express");
const users = express.Router();
const cors = require("cors");

const User = require("../models/User");
users.use(cors());

users.post('/subscribe', (req,res) => {
  const userData = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email
  }

  User.findOne({
    email: req.body.email
  })
  .then(user => {
    if(!user) {
      User.create(userData)
      .then(user => {
        res.json({status: user.email + ' subscribed!'})
      })
      .catch(err => {
        res.send('error: ' + err)
      })
    }
    else {
      res.json({error: 'User already exists.'})
    }
  })

  .catch(err => {
    res.send('error: ' + err)
  })
});

module.exports = users
