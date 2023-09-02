const {createProduct, getProducts} = require('../services/products.service');

exports.createProduct = async (req, res, next) => {
    console.log(req.body)
    const result = await createProduct(req.body)
    res.status(201).json({info: result});
}

exports.getProducts = async (req, res, next) => {
    const result = await getProducts();
    res.status(200).json({result});
}