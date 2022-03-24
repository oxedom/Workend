const express = require('express');
// const userModel = require('../models/userModel');
const router = express.Router();
const logic = require('../models/bl/post_BL')



router.post('/', async (req, res) => {
    let status = await logic.addAPost(req.body)
    return res.json(status)
  });


router.get('/', async (req, res) => {
  let status = await logic.getAllPosts()
    return res.json(status)

  });

router.get('/:id', async (req, res) => {
    let status = await logic.getPostByID(req.params.id)
      return res.json(status)
    });


router.delete('/:id', async (req, res) => {
  let status = await logic.deletePostByID(req.params.id)
    return res.json(status)
    });

router.put('/:id', async (req, res) => {
  let status = await logic.updatePostbyID(req.params.id, req.body)
    return res.json(status)
    });



module.exports = router

  