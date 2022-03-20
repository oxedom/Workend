const express = require('express');
// const userModel = require('../models/userModel');
const router = express.Router();
const logic = require('../models/user_BL')

router.post('/', async (req, res) => {
    let status = await logic.addAUser(req.body)
    console.log(req.body)
    return res.json(status)
  });

  router.get('/', async (req, res) => {
    let status = await logic.getAllUser()
    return res.json(status)
  });


module.exports = router

  