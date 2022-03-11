const express = require('express');
const router = express.Router();

const {getAllProducts, getProductById, createProduct, updateProduct, deleteProduct} = require('../controllers/productController');

//@description: GET all products 
//@route           GET /api/products
router.get('/', getAllProducts);


//@description: GET Aa product by id
//@route           GET /api/products/product?_id=
router.get('/product', getProductById);

//@description: POST Aa product by id
//@route           POST /api/product/create
router.post('/create', createProduct);

//@description: PUT Aa product by id
//@route           PUT /api/product/update
router.put('/update', updateProduct);

//@description: DELETE Aa product by id
//@route           DELETE /api/product/delete
router.delete('/delete', deleteProduct);

module.exports = router;