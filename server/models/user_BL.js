const User = require('./userModel')

const addAUser = (userObj) => {
    return new Promise ((resolve, reject) => {

        let newUser = new User()
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


module.exports = { addAUser}