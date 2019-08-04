const Mongoose = require('mongoose');

schema = Mongoose.Schema

const PostSchema = new schema({
    content:String,
    title:String,
    date:{type: Date, default: Date.now},
    comment_id:[{
        type:String
    }],
    User_id:String,
    likes: [{type:String}]
})

const Post = Mongoose.model("Post", PostSchema)

module.exports = Post