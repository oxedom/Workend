const express = require('express');
// const userModel = require('../models/userModel');
const router = express.Router();
const logic = require('../models/bl/user_BL')



//ie: http://localhost:8000/api/user + JSONbody of user
router.post('/', async (req, res) => {
    let status = await logic.addAUser(req.body)
    console.log(req.body)
    return res.json(status)
  });


//Returns all Users
router.get('/', async (req, res) => {
  let status = await logic.getAllUser()
    return res.json(status)
  });

//Returns a user (add ID after / ie: http://localhost:8000/api/user/1421421421
router.get('/:id', async (req, res) => {
    let status = await logic.getUserByID(req.params.id)
      return res.json(status)
    });

//Deletes a user by id ie: http://localhost:8000/api/user/1421421421
router.delete('/:id', async (req, res) => {
  let status = await logic.deleteUserByID(req.params.id)
    return res.json(status)
    });

//Updates a user by ID and takes as JSON a user OBJ 
//ie: http://localhost:8000/api/user/1421421421 + JSON in body 
router.put('/:id', async (req, res) => {
  let status = await logic.updateUserbyID(req.params.id, req.body)
    return res.json(status)
    });



module.exports = router

  