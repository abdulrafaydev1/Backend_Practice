const express = require('express');
const dotenv = require('dotenv')
dotenv.config()
const port = process.env.PORT || 5000

const app = express()

app.listen(port, (req, res) =>{
    console.log(`Server is running at ${port}`)
})
