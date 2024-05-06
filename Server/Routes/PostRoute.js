const axios = require('axios')
const express = require('express')

const router = express()
router.use(express.json())

router.get('/', async (req, res)=>{
    try {
        await axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((res)=>{
            console.log("Post data:", res.data)
        }).catch((err)=>{
            console.log(err)
        })
        res.json("200 - Data fetched")

    } catch (error) {
        res.status(500).json()
        console.log(error)
       }

    
})


module.exports = router;