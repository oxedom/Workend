const mongoose = require('mongoose')

const postSchema = mongoose.Schema(
    {
        userid: {type: String},
        text: { type: String},
        date: { type: String},
    }
)

module.exports = mongoose.model('post', postSchema)    


