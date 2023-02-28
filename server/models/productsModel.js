const mongoose = require('mongoose');

const Schema = mongoose.Schema


const productSchema = new Schema({
   product_id:{
        type:String,
        unique: true,
        trim: true,
        required: true
    },
    title:{
        type:String,
        trim: true,
        required: true
    },
    price:{
        type:Number,
        trim: true,
        required: true
    },
    description:{
        type:String,
        required: false
    },
    images:{
        type:Object,
        required: true
    },
    category:{
        type:String,
        required: true
    }

},{
    timestamps:true
})

module.exports = mongoose.model('Product', productSchema)