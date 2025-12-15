const mongoose = require('mongoose')


const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/userDB')
        console.log('mongoDB connected successfully')
    } catch (err) {
        console.error('mongoDB connection error:', err)
        process.exit(1)
    }   
}

module.exports = {
    connectDB
}