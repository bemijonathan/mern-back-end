const  Post = require('../models/post')
const User = require('../models/user')

const addPost = async (req, res) => {

    let user_id = User.find({username:req.body.user})
    
    let new_post = new Post({
        content:req.body.content,
        User_id:user_id[0].id,
    })
    
    new_post.save().then(e => {
        console.log(e)
        res.send('added')
    },err => {
        console.log(err)
    })
}
module.exports = addPost 
