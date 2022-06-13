const express = require('express')
const app = express()

app.get('/', (req, res)=>{
    res.send('ok this is a rsponse')
})


const PORT = process.env.PORT || 5001;

app.listen(PORT, ()=>{
    console.log(`app is running on post ${PORT}`)
})