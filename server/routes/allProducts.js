const express = require('express')
const router = express.Router();
const {
    createProduct,
    getAllProducts,
    getProduct,
    deleteProduct,
    updateProduct
} = require('../controller/productController');

// GET all products
router.get('/', getAllProducts)

// GET a single product
router.get('/:id',getProduct)

// POST a new product
router.post('/', createProduct)



// DELTE a product
router.delete('/:id', deleteProduct) 

// UPDATE a product
router.patch('/:id', updateProduct)

module.exports = router