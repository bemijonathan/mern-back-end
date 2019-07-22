const Mongoose = require('mongoose');

schema = Mongoose.Schema

const Message = new schema({
    content:String,
    date:{type: Date, default: Date.now},
    post_id:String,
    sender:String,
    reciever:String
})

const Messages = Mongoose.model('Message', Message)

module.exports = Messages