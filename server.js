const express = require('express');
const dotenv = require('dotenv')
dotenv.config()
const port = process.env.PORT || 5000
const app = express()

app.get('/', (req, res) => {
    res.send('hello ')
})

app.listen(port, (req, res) => {
    console.log(`backend is running ${port}`)
})