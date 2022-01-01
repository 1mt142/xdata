const express = require('express');
const route=express.Router();

route.get("/", (req, res, next) => {
    console.log("This is another Middleware");
    res.send('Home Page |Shop')
  });

  module.exports=route;