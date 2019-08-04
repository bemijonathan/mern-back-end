const user = require('./../models/user')
const Post = require('./../models/post')


const user_detail = async(req, res) => {
    let userParams = req.params.id

    let result = await user.find({username:userParams})

    let Posts = await Post.find({User_id:result._id})

    const {name, stack , username , location } = result[0]

    res.status(200).json({
        name, 
        stack, 
        username, 
        location,
        posts:Posts.length
    })
}

module.exports = user_detail