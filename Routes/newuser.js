const user = require('../models/user')

const adduser = (req, res) => {
    console.log(req.body);

    let User = new user({
        name:req.body.name,
        stack:req.body.stack,
        username:req.body.username,
        location:req.body.location,
        website:req.body.website,
    })

    User.save().then(e => {

        const {name , stack, username , location} = User

        res.send({
            name,
            stack,
            username,
            location
        })
    }, e => {
        console.log(e)
        res.send('error')
    })

}

module.exports = adduser