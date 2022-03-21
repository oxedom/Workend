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

router.get('/:id', async (req, res) => {
    let status = await logic.getUserByID(req.params.id)
      return res.json(status)
    });


router.delete('/:id', async (req, res) => {
  let status = await logic.deleteUserByID(req.params.id)
    return res.json(status)
    });

router.put('/:id', async (req, res) => {
  let status = await logic.updateUserbyID(req.params.id, req.body)
    return res.json(status)
    });



module.exports = router

  