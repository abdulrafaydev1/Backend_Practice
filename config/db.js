const mongoose = require("mongoose");

const mongodbConnected = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('mongodb connected')

    } catch (error) {
        console.log(error)
    }
}

module.exports = mongodbConnected
