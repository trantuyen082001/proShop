import express from "express";
import expressAsyncHandler from "express-async-handler";
const router = express.Router();
import Product from '../models/productModel.js';

// @desc Fetch all products
// @route Get /api/products
// @acess public
router.get('/', expressAsyncHandler(async (req, res) => {
    const products = await Product.find({})

    res.json(products)
}))

// @desc Fetch signle products
// @route Get /api/product/:id
// @acess public
router.get('/:id', expressAsyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);

    if(product) {
        res.json(product)
    } else {
        res.status(404)
        throw new Error('Product not found')
    }
}))


export default router;