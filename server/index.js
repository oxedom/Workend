const mongoose = require('mongoose')
const express = require('express')
const app = express()
const creds = require('./config/config')
const git = 1
mongoose.connect
(`mongodb+srv://${creds.username}:${creds.password}
@cluster0.9261n.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`)

