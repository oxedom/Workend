const mongoose = require('mongoose')
const express = require('express')
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const app = express()
const cors = require('cors')
const config = require('./config/config')
const user_routes = require('./Routers/users')
const post_routes = require('./Routers/posts')
const task_routes = require('./Routers/tasks')


const path = require('path');


require('dotenv').config();



mongoose.connect(config, { useUnifiedTopology: true, useNewUrlParser: true } )
.then( (result) => { app.listen(4000, console.log('Server is Online PORT 4000'))})
const db = mongoose.connection 
db.on("error", console.error.bind(console, "mongo connection error"))


require('./Config/passport')(passport);




app.use(passport.initialize());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors())

app.use(express.static(path.join(__dirname, 'public')));
app.use('/api/user/tasks', task_routes)
app.use('/api/user/posts', post_routes)
app.use('/api/user/', user_routes)
// app.listen(3000);


