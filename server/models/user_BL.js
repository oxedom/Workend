const User = require('./userModel')

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

        newUser.save( (err) => {
            if(err) { reject(err)}
            else { resolve('User added to DB')}
        })
    })
}

const getAllUser = () => 
{
    return new Promise((resolve,reject) => {
        User.find({}).then(data => resolve(data)).catch(err => { reject(err)})
    })
}

const getUserByID = (id) => 
{
    return new Promise((resolve,reject) => {
        User.findById(id).then(data => resolve(data)).catch(err => { reject(err)})
    })
}
module.exports = { addAUser, getAllUser, getUserByID}