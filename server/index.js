const mongoose = require('mongoose')
const express = require('express')
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const app = express()
const cors = require('cors')
const config = require('./config/config')
const user_routes = require('./routes/users')
const post_routes = require('./routes/posts')
const task_routes = require('./routes/tasks')
const User = require('./models/userModel')



mongoose.connect(config, { useUnifiedTopology: true, useNewUrlParser: true } )
.then( (result) => { app.listen(8000, console.log('Server is Online PORT 8000'))})
const db = mongoose.connection 
db.on("error", console.error.bind(console, "mongo connection error"))






app.use(express.json())
app.use(cors())
app.use('/api/user/tasks', task_routes)
app.use('/api/user/posts', post_routes)
app.use('/api/user/', user_routes)



