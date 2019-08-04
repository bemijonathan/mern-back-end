const Mongoose = require('mongoose');

schema = Mongoose.Schema

const CommentSchema = new schema({
    content:String,
    date:{type: Date, default: Date.now},
    post_id:String,
    user:String
})

const Comment = Mongoose.model('Comment', CommentSchema)

module.exports = Comment