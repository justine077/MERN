const Product = require('../models/productsModel');
const mongoose = require('mongoose');

// GET all Products
const getAllProducts = async (req, res) => {
    const products = await Product.find({}).sort({ createdAt: -1 })
    
    res.status(200).json(products)
}

// GET a single Product
const getProduct = async (req, res) => {
    const { id } = req.params
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such product'})
    }
    
    const product = await Product.findById(id)

    if (!product) {
        return res.status(404).json({error: 'No such product'})
    }

    res.status(200).json(product)

}

// POST OR CREATE a new Product
    const createProduct = async (req, res) => {
    const {product_id, title, price, description, images, category} = req.body
    
    // ADD Doc to Database
    try {
        const product = await Product.create({product_id, title, price, description, images, category })
        res.status(200).json(product)
    }   catch (error) {
        res.status(404).json({error: error.message})
    } 
}

// DELETE a Product
const deleteProduct = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such product'})
    }

    const product = await Product.findOneAndDelete({ _id: id })
    
    if (!product) {
        return res.status(404).json({error: 'No such product'})
    }

    res.status(200).json(product)
    
}

// UPDATE a Product
const updateProduct = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such product'})
    }
    
    const product = await Product.findOneAndUpdate({ _id: id }, {
        ...req.body
    })

    if (!product) {
        return res.status(404).json({error: 'No such product'})
    }

    res.status(200).json(product)
    }


module.exports = {
    getAllProducts,
    getProduct,
    createProduct,
    deleteProduct,
    updateProduct
}