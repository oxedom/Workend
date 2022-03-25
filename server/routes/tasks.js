const express = require('express');
// const userModel = require('../models/userModel');
const router = express.Router();
const logic = require('../models/bl/task_BL')
router.post('/', async (req, res) => {
    let status = await logic.addAtask(req.body)
    return res.json(status)
  });

//Get all of the users tasks 
router.get('/', async (req, res) => {
  let status = await logic.getAlltasks()
    return res.json(status)

  });

//Get Task by ID 
router.get('/:id', async (req, res) => {
    let status = await logic.gettaskByID(req.params.id)
      return res.json(status)
    });


//Delete Task by ID
router.delete('/:id', async (req, res) => {
  let status = await logic.deletetaskByID(req.params.id)
    return res.json(status)
    });

//Update task by ID + Updated Task Body
router.put('/:id', async (req, res) => {
  let status = await logic.updatetaskbyID(req.params.id, req.body)
    return res.json(status)
    });



module.exports = router

  