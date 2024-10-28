const mongoose = require('mongoose');

// Define the product schema
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String },
  imageUrl: { type: String }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
