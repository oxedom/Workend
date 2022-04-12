const User = require('../UsersModel')


//Creates a user Obj based of the User Schema and puts of the userObj info 
//from the req obj into the new user and at the end saves the new user.

const addAUser = (userObj) => {
    return new Promise ((resolve, reject) => {
        let newUser = new User()
        // newUser.username = userObj.username
        // newUser.password = userObj.password
        newUser.fname = userObj.fname
        newUser.lname = userObj.lname
        newUser.department = userObj.department
        newUser.email = userObj.email
        newUser.birthday = userObj.birthday
        newUser.posts = userObj.posts
        newUser.tasks =userObj.tasks
        newUser.Username =userObj.username
        newUser.salt =userObj.salt
        newUser.hash =userObj.hash
        
        newUser.save( (err) => {
            if(err) { reject(err)}
            else { resolve('User added to DB')}
        })
    })
}

//Sends a query to the DB and 
//returns all docs from the user collection
const getAllUser = () => 
{
    return new Promise((resolve,reject) => {
        User.find({}).then(data => resolve(data)).catch(err => { reject(err)})
    })
}


//Sends a query to the DB and returns one user with
// that id  from the user collection
const getUserByID = (id) => 
{
    return new Promise((resolve,reject) => {
        User.findById(id)
        .then(data => resolve(data))
        .catch(err => { reject(err)})
    })
}

//Sends a query to the DB and deletes
// that id  from the user collection
const deleteUserByID = (id) => 
{
    return new Promise((resolve,reject) => {
        User.findByIdAndDelete(id)
        .then(data => resolve("Deleted"))
        .catch(err => { reject(err)})
    })
}

//Sends a query to the DB and updates
// that id  from the user collection
const updateUserbyID = (id,userObj) => 
{
    return new Promise((resolve,reject) => {
        User.findByIdAndUpdate(id, userObj, (err) => 
        {
            if(err) { reject(err)}
            else { resolve('updated')}
        })
 
       
    })
}


module.exports = { addAUser, getAllUser, getUserByID, updateUserbyID, deleteUserByID}