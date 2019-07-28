const User = require('../models/user');
const jwt = require('jsonwebtoken')
const  bcrypt = require('bcrypt')

const Login = async (req, res) => {
    let password = req.body.password
    let username = req.body.username

    let user = await User.findOne({ username })

    let {name,stack,gotusername,location } = user 

    let data = {name,stack,gotusername,location }

    let token = jwt.sign({ exp: Math.floor(Date.now() / 1000) + (60 * 600), data }, 'jonathansblog');

    user.token.auth = token 

    let checkpassword = await bcrypt.compare(password, user.password )
    
    console.log(checkpassword)

    if(checkpassword === true){
        await user.save()
        res.send({
            message:'welcome',
            token
        })
    }else{
        res.send({
            message:'incorrect username of password'
        })
    }


}

module.exports = Login