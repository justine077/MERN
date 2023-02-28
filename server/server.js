require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./routes/allProducts');
// express app
const app = express()

// middleware
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, res.method)
    next()
})

// routes 
app.use('/api/products', productRoutes)

// conncet to databse
mongoose.connect(process.env.MONGODBB_URL)
    .then(() => {
         // Listen for requests
        app.listen(process.env.PORT, () => {
        console.log('connected on db & listening on port', process.env.PORT)
})
     })
    .catch((error) => {
        console.log(error)
    })
