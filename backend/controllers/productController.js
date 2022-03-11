const Product = require('../models/Product');

const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getProductById = async (req, res) => {
    try {
        const { _id} = req.query;
        const product = await Product.findById(_id);
        res.json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


const createProduct = async (req, res) => {
    try {
        const product = await Product.findOne({ name: req.body.name });
        if (product) {
            return res.status(400).json({ message: 'Product already exists' });
        }
        const newProduct = new Product({
            name: req.body.name,
            price: req.body.price,
            description: req.body.description,
            imageUrl: req.body.imageUrl,
        });
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const updateProduct = async (req, res) => {
    const { _id, name, price, description, imageUrl } = req.body;
    
    try {
        const product = await Product.findOne({ _id })
        if (product) {
            await product.update({ name, price, description, imageUrl });
            res.status(200).send('ok')
        } else {
            res.status(404).send('not found')
        }
    } catch (error) {
        console.log(error)
    }
}

const deleteProduct = async (req, res) => {
    try {
        const { _id} = req.query;
        const product = await Product.findById(_id);
        if (product) {
            await product.remove();
            res.status(200).send('ok')
        } else {
            res.status(404).send('not found')
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getProductByName = async (req, res) => {
    try {
        const { name } = req.query;
        const product = await Product.findOne({ name });
        res.json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getAllProducts,
    getProductById,
    getProductByName,
    createProduct,
    updateProduct,
    deleteProduct
}