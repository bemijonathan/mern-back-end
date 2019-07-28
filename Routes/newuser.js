const user = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const adduser = async (req, res) => {
    console.log(req.body);

    let User = new user({
        name: req.body.name,
        stack: req.body.stack,
        username: req.body.username,
        location: req.body.location,
        website: req.body.website,
        password: req.body.password
    })

    let data = {
        name:User.name,
        stack:User.stack,
        username:User.username,
        location:User.location
    }

    let token = jwt.sign({ exp: Math.floor(Date.now() / 1000) + (60 * 600), data }, 'jonathansblog');

    User.token.auth = token

    try {

        let hashedpassword = await bcrypt.hash(User.password, 10)
        User.password = hashedpassword

        let userdetails = await User.save()

        console.log(userdetails)

        res.send({
            token
        })

    } catch (error) {
        res.send(error)
        console.log(error)
    }
}

module.exports = adduser