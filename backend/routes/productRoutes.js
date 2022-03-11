const express = require('express');
const router = express.Router();

const {getAllProducts, getProductById, createProduct, updateProduct} = require('../controllers/productController');

//@description: GET all products 
//@route           GET /api/products
router.get('/', getAllProducts);


//@description: GET Aa product by id
//@route           GET /api/products/product?_id=
router.get('/product', getProductById);

//@description: GET Aa product by id
//@route           GET /api/product/create
router.post('/create', createProduct);

//@description: GET Aa product by id
//@route           GET /api/product/update
router.put('/update', updateProduct);

module.exports = router;