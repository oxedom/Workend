const mongoose = require('mongoose')
const express = require('express')
const app = express()
const cors = require('cors')
const config = require('./config/config')
const user_routes = require('./routes/users')



mongoose.connect(config)
.then( (result) => { app.listen(8000, console.log('Server is Online PORT 8000'))})
app.use(express.json())
app.use(cors())
app.use('/api/user/', user_routes)


