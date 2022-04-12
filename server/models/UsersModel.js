const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
    {    
        fname: { type: String},
        Username: String, 
        lname : String,
        hash : String,
        salt: String,
        department: { type: String},
        email: { type: String},
        birthday: Number,
        posts: { type: Array, postID: String},
        tasks: { type: Array, taskID: String},
    }
)

module.exports = mongoose.model('user', userSchema)    


