const path = require('path')
const rootDir = require('../util/path');

const express = require('express');

const route=express.Router();

route.get("/", (req, res, next) => {
    console.log("This is another Middleware");
    // res.send('Home Page |Shop')
    res.sendFile(path.join(rootDir,'views','shop.html'))
  });

  module.exports=route;