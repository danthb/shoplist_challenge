const express = require('express');
const router = express.Router();

const {getAllProducts, getProductById} = require('../controllers/productController');

//@description: GET all products 
//@route           GET /api/products
router.get('/', getAllProducts);


//@description: GET Aa product by id
//@route           GET /api/products/.id
router.get('/:id', getProductById);

module.exports = router;