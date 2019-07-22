const user = require('../models/user')
const Post = require('../models/post')
const Comment = require('../models/comments')



const comments = async (req, res) => {

    try {
        
    let newComment = new Comment({
        content : req.body.content,
        post_id: req.params.post_id
    })

    let usertrue = {}

    let posttrue  = {}

    usertrue = await user.findById(req.headers.user)
    if(usertrue){
        usertrue.comments.push(newComment.id)
    }
       

    posttrue = await Post.findById(req.params.id)
    if(posttrue){
        posttrue.comment_id.push(newComment.id)
    }

    if(posttrue !== {} && usertrue !== {} ){
        await newComment.save()
        res.send('newComment added')
    
    }
    }catch(e){
        res.send('uniidentified user or post')
        console.log(e)
    }
}

module.exports = comments