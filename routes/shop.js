const path = require('path')
const rootDir = require('../util/path');

const express = require('express');
const adminData =require('./admin')

const route=express.Router();

route.get("/", (req, res, next) => {
    // console.log("This is another Middleware");
    // res.send('Home Page |Shop')
    // console.log(adminData.products);
    // res.sendFile(path.join(rootDir,'views','shop.html'))
    //For PUG
    const products = adminData.products;
    res.render('shop',{prods:products,docTitle:"Shop Page",path:"/"})
  });

  module.exports=route;