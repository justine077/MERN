require('dotenv').config()

const express = require('express');

// express app
const app = express()


// routes 
app.get('/', (req, res) => {
    res.json({mssg: 'Welcome to the app'})
})
// listen to the app
app.listen(process.env.PORT, () => {
    console.log('listening on' , process.env.PORT)
})