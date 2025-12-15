
const argon2 = require('argon2')
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: 
    {
        type: String, 
        required: true, 
        unique: true
    },
    password: 
    {
        type: String, 
        required: true
    }
})

userSchema.pre('save', async function () {
    if (!this.isModified('passwordhash')) return
    
})

const User = mongoose.model('User', userSchema)
module.exports = User