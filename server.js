const express = require('express');
const dotenv = require('dotenv')
const mongodbConnected = require('./config/db')
dotenv.config()
mongodbConnected()
const port = process.env.PORT || 5000
const app = express()


app.listen(port, (req, res) => {
    console.log(`backend is running ${port}`)
})