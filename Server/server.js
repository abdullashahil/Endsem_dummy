const express = require('express')
const cors = require('cors')
require('dotenv').config()
const PostRoute = require('./Routes/PostRoute')
const axios = require('axios')

const app = express()
const PORT = process.env.PORT

app.use(express.json())
app.use(cors())
app.use('/posts',PostRoute)

app.listen(PORT, ()=>{
    console.log(`server running on PORT: ${PORT}`)
})

app.get('/ping', (req, res)=>{
    res.send("pong")
})


module.exports = app;