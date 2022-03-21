const mongoose = require('mongoose')

const taskSchema = mongoose.Schema(
    {
        userid: {type: String},
        title: { type: String},
        text: { type: String},
        completed: { type: Boolean},
        date: { type: String},
    }
)

module.exports = mongoose.model('task', taskSchema)    


