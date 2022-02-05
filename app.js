const  path  = require("path");
// const http = require("http");
const express = require("express");
const bodyParser = require('body-parser')
// Local Imports 
// Routes
const adminData =require('./routes/admin')
const shopRoutes=require('./routes/shop');
// Confiq
const port = 5000;
const app = express();
// init view engines
app.set('view engine','ejs');
app.set('views','views');


// enable bodyparser
app.use(bodyParser.urlencoded({extended:false}));

// enable static files
app.use(express.static(path.join(__dirname,'public')));

// simple middleware
app.use((req,res,next)=>{
  console.log("url:",req.url);
  next()
});
// Confiq End
app.use('/admin',adminData.router);
app.use(shopRoutes);

// Default Page
app.use((req, res, next) => {
    res.status(404).render('404', { pageTitle: 'error',path: '', });
  });
  
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});