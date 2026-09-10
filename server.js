const express = require('express');
const dotenv = require('dotenv')
const product = require('./routes/product')
dotenv.config()
const port = process.env.PORT || 5000
dbConnected()

const app = express()

app.use('/product', product)
 
app.listen(port, (req, res) =>{
    console.log(`Server is running at ${port}`)
})
