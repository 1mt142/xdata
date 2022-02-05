const path = require('path')

const express = require('express');
const rootDir = require('../util/path');
const router = express.Router();

const products = [];

// get Request
router.get('/add-product', (req,res,next) => {
  console.log("ok");
  res.render('add-product',{pageTitle:"Add Product",path:'/admin/add-product'})
});

// post Request
router.post('/add-product',(req,res,next) => {
  products.push({title:req.body.title});
  res.redirect('/');
})
// module Exports 
exports.router = router;
exports.products = products;