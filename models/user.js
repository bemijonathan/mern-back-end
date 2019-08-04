const Mongoose = require('mongoose');

schema = Mongoose.Schema

const UserSchema = new schema({
    name: { type: String, required: true },
    stack: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    location: { type: String, required: true },
    password: { type: String, required: true },
    website: String,
    date: { type: Date, required: true, default: Date.now },
    token:{
        auth:{type: String}
    }
})

const User = Mongoose.model('User', UserSchema)

module.exports = User