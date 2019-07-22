const express = require('express');
const home = require('./Routes/home')
const newPost = require('./Routes/addpost')
const newUser = require('./Routes/newuser')
const bodyParser = require('body-parser')
const {likes} = require("./models/like")
const {unlikes} = require("./models/like")
const Mongoose = require('mongoose')
const singlepost = require('./Routes/singlepost')
const comments = require('./Routes/comments')
Mongoose.connect('mongodb://localhost:27017/my_blog', {useNewUrlParser: true});




const app = express()

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    home(req, res)
})

app.post('/like/:id', (req, res) => {
    likes(req, res)
})

app.delete('/like/:id', (req, res) => {
    unlikes(req, res)
})

app.get('/:id',(req, res) => {
    singlepost(req, res)
})

app.post('/comments/:id', (req, res) => {
    comments(req, res)
})

app.post('/post', (req, res) => {
    newPost(req, res)
})

app.post('/user', (req, res) => {
    newUser(req, res)
})

app.get('/user', (req, res) => {

})

app.listen(3500, console.log('app is working'))