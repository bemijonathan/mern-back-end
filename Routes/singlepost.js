const user = require('../models/user')
const Post = require('../models/post')
const Comment = require('../models/comments')



const singlepost = async (req, res) => {
    try {
        let gottenComments = await Comment.find({ post_id: req.params.id })
        let findPost = await Post.findById(req.params.id)

        console.log(gottenComments)

        res.send({
            post: findPost,
            commets: gottenComments
        })
    } catch (error) {
        res.send(error)
    }


}

module.exports = singlepost