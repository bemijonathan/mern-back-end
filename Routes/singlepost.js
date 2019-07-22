const user = require('../models/user')
const Post = require('../models/post')
const Comment = require('../models/comments')



const singlepost = (req, res) => {
    Post.findById(req.params.id).then(e => {
        let ids = e.comment_id
        let comment = []

        ids.forEach(element => {
            Comment.find({id:element}).then(e => {
                comment = e
            })
        });

        
        res.send({
            post:e,
            comment
        })
    },err =>{
        console.log(err)
    })

}

module.exports = singlepost