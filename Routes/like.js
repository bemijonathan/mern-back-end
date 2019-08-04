
let User = require('../models/user')
let Posts = require('../models/post')

const likes = async (req, res) => {
    try {
        let selectedpost = req.params.id

        let Return = await Posts.findById(selectedpost);

        User.find({ token: { auth: req.headers.auth } }).then((user) => {
            Return.likes.push(user[0]._id);
            user[0].likes.push(Return._id)
            console.log(user, 'user details');
            console.log(Return, 'post returned')
            Return.save().then((saved) => {
                console.log(saved)
                res.sendStatus(200)
            })
        })
    } catch (error) {
        res.sendStatus(500)
    }

}


const unlikes = async (req, res) => {
    try {
        let selectedpost = req.params.id

        let Return = await Posts.findById(selectedpost);

        User.find({ token: { auth: req.headers.auth } }).then((user) => {
            let a = Return.likes.filter(e => e !== user[0]._id);
            let b = user[0].likes.filter(e => e !== Return._id)
            user[0].likes = b
            Return.likes = a

            res.sendStatus(200)
        })
    
    } catch (error) {
        res.sendStatus(500)
    }



}


module.exports = {
    likes,
    unlikes
}