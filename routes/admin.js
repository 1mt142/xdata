const path = require('path')

const express = require('express');

// controllers
const productsController=require('../controllers/products')

const rootDir = require('../util/path');
const router = express.Router();


// get Request
router.get('/add-product',productsController.getAddProducts);

// post Request
router.post('/add-product',productsController.postAddProducts)

// module Exports 
module.exports=router;