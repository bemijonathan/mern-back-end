

let Posts = require('../models/post')

const likes = async (req, res) => {
    let selectedpost = req.params.id 
    
    let Return = await Posts.findById(selectedpost)

    let saved = await Return.save()

    console.log(saved)

    res.sendStatus(200)

}

const unlikes = async (req, res) => {
    let selectedpost = req.params.id 
    
    let Return = await Posts.findById(selectedpost)

    let saved = await Return.save()

    console.log(saved)

    res.sendStatus(200)

}


module.exports = {
    likes,
    unlikes
}