const path = require('path')
const rootDir = require('../util/path');

const express = require('express');
// controllers
const productsController=require('../controllers/products')

const router = express.Router();

// get Poroducts

router.get('/',productsController.getProducts)

  module.exports=router;