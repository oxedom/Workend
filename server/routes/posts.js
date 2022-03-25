const express = require('express');
// const userModel = require('../models/userModel');
const router = express.Router();
const logic = require('../models/bl/post_BL')


//Add a new post by sending the a post OBJ as json in the body
router.post('/', async (req, res) => {
    let status = await logic.addAPost(req.body)
    return res.json(status)
  });

//Get all the posts of the users (Used for the user feed)
router.get('/', async (req, res) => {
  let status = await logic.getAllPosts()
    return res.json(status)

  });

//Get All the users posts by user ID 
router.get('/:id', async (req, res) => {
    let status = await logic.getAllUserPosts(req.params.id)
      return res.json(status)
    });



//Delete a post by it's ID. 
router.delete('/:id', async (req, res) => {
  let status = await logic.deletePostByID(req.params.id)
    return res.json(status)
    });

//Update a post by it's ID
router.put('/:id', async (req, res) => {
  let status = await logic.updatePostbyID(req.params.id, req.body)
    return res.json(status)
    });



module.exports = router

  