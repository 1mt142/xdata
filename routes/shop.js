const path = require('path')
const rootDir = require('../util/path');

const express = require('express');
const adminData =require('./admin')

const router = express.Router();

// get Poroducts

router.get('/',(req,res,next) => {
  const products=adminData.products;
  res.render('shop',{pageTitle:"Shop",path:"/",prods:products})
})

  module.exports=router;