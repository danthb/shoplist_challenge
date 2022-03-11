const mongoose = require('mongoose');

const productShema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    imageUrl: {
        type: String,
        required: false,
    },
    fav: {
        type: Boolean,
        required: false,
    }
})

const Product = mongoose.model('product', productShema);

module.exports = Product;