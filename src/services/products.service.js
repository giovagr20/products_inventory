const { createProduct, getProducts } = require("../models/products.model");

exports.createProduct = async (product) => {
  return await createProduct(product);
};

exports.getProducts = async () => {
    return await getProducts();
} 
