const jwt = require('jsonwebtoken');


const verify = async (req, res, next) => {
    let token = req.headers.auth

    try {
        var decoded = jwt.verify(token, 'jonathansblog')
        next()
    } catch (error) {
         res.send('not authorized')
    }

       
}

module.exports = verify