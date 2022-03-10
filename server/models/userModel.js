const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
    {
        username: {type: String},
        password: { type: String},
        fname: { type: String},
        lname: { type: String},
        department: { type: String},
        email: { type: String},
        birthday: Number,
        posts: [{ type: Array,  title: String, time: Number }],
        tasks: [{ type: Array,  title: String, completed: Boolean }],
    }
)

module.exports = mongoose.model('user', userSchema)    


