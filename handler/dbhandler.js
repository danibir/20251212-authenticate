const mongoose = require('mongoose')


const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017')
        console.log('mongoDB connected successfully')
        return true
    } catch (err) {
        console.error('mongoDB connection error:', err)
        return false
    }   
}

module.exports = {
    connectDB
}