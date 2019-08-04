const user = require('../models/user')
const Post = require('../models/post')
const Comment = require('../models/comments')



const comments = (req, res) => {

    try {
        let newComment;
        user.find({ token: { auth: req.headers.auth } }).then(usern => {
            newComment = new Comment({
                content: req.body.content,
                post_id: req.params.id,
                user: usern[0].username
            })

            Post.findById(newComment.post_id).then(posttrue => {
                console.log(posttrue, 'post')
                posttrue.comment_id.push(newComment.id)
                posttrue.save().then(() => {
                    newComment.save().then(() => {
                        res.send({
                            message: 'added'
                        })
                    })
                })

            })
        })

    } catch (e) {
        res.send('uniidentified user or post')
        console.log(e)
    }
}

module.exports = comments