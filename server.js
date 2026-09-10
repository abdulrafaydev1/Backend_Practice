const express = require('express');
const dotenv = require('dotenv')
const dbConnected = require('./config/db')
dotenv.config()
const port = process.env.PORT || 5000
dbConnected()

const app = express()

app.listen(port, (req, res) =>{
    console.log(`Server is running at ${port}`)
})
