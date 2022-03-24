const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
    {
        // password: { type: String},
        fname: { type: String},
        lname: { type: String},
        department: { type: String},
        email: { type: String},
        birthday: Number,
        posts: { type: Array, postID: String},
        tasks: { type: Array, taskID: String},
    }
)

module.exports = mongoose.model('user', userSchema)    


