const mongoose = require(mongoose);
const dbConnected = () => {
    try {
        mongoose.connect(process.env.MONGO_URI)
        console.log('db Connected')
    } catch (error) {
        console.log(error)

    }
}
module.exports = dbConnected
