const  Post = require('../models/post')

const addPost = (req, res) => {
    console.log(req.body)
    let new_post = new Post({
        content:req.body.content,
        User:req.body.user,
    })

    new_post.save().then(e => {
        console.log(e)
        res.send('added')
    },err => {
        console.log(err)
    })
}
module.exports = addPost 
