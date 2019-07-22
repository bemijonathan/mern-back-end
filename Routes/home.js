let Posts = require('../models/post')

const home = (req, res) => {
    Posts.find({}).then(e => {
        let result = []

        e.forEach(post => {
            let { content, title, date, comment_id, likes , id} = post
            result.push({
                content,
                id,
                title,
                date,
                likes,
                comment_id: comment_id.length
            })
        })

        res.send(result)
    }, err => {
        console.log(e)
    })
}
module.exports = home 