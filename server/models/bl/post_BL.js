const Post = require('../postModel')
const User = require('../userModel')

//Creates a Post Obj based of the Post Schema and puts of the PostObj info 
//from the req obj into the new Post and at the end saves the new Post.

const addAPost = (postObj) => {
    return new Promise ((resolve, reject) => {
        let newPost = new Post()
        // newUser.username = postObj.username
        // newUser.password = postObj.password
        newPost.userid = postObj.userid
        newPost.text =  postObj.text
        newPost.date = new Date().getTime()
    
        newPost.save( async (err) => {
            if(err) { reject(err)}
            

            let theUser = await  User.findById(newPost.userid)
            theUser.posts.push(newPost._id)
            User.findByIdAndUpdate(`${newPost.userid}`, theUser).then( () => 
            {
                resolve(`Added post for USERID: ${newPost.userid}, the post ID is ${newPost._id}`)
            })
        
          
        })
    })
}

//Sends a query to the DB and 
//returns all docs from the Post collection
const getAllPosts = () => 
{
    return new Promise((resolve,reject) => {
        Post.find({}).then(data => resolve(data)).catch(err => { reject(err)})
    })
}


//Sends a query to the DB and returns one Post with
// that id  from the Post collection
const getPostByID = (id) => 
{
    return new Promise((resolve,reject) => {
        Post.findById(id)
        .then(data => resolve(data))
        .catch(err => { reject(err)})
    })
}

//Sends a query to the DB and deletes
// that id  from the Post collection
const deletePostByID = (id) => 
{
    return new Promise((resolve,reject) => {
        Post.findByIdAndDelete(id)
        .then(data =>
             resolve("Deleted"))
        .catch(err => { reject(err)})
    })
}

//Sends a query to the DB and updates
// that id  from the Post collection
const updatePostbyID = (id,postObj) => 
{
    return new Promise((resolve,reject) => {
        Post.findByIdAndUpdate(id, postObj, (err) => 
        {
            if(err) { reject(err)}
            else { resolve('updated')}
        })
 
       
    })
}


module.exports = { addAPost, getAllPosts, getPostByID, updatePostbyID, deletePostByID}