const  path  = require("path");
// const http = require("http");
const express = require("express");
const bodyParser = require('body-parser')
// Local Imports 
// Routes
const adminRoutes =require('./routes/admin')
const shopRoutes=require('./routes/shop');

// Controllers
const errorControllers=require('./controllers/error')
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
app.use('/admin',adminRoutes);
app.use(shopRoutes);

// Default Page
app.use(errorControllers.get404);
  
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});