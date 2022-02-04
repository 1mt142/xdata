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
app.set('view engine','pug');
app.set('views','views');
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));
app.use((req,res,next)=>{
  console.log("Action Checks");
  next()
});
// Confiq End
app.use('/admin',adminData.routes);
app.use(shopRoutes);

// Default Page

app.use((req,res,next)=>{
  // res.status(404).send("Page Not Found!")
  // res.status(404).sendFile(path.join(__dirname,'views','404.html'))
  // For PUG
  res.status(404).render('404',{pageTitle:"Page not Found!"})

})



// Output Web
// End Output Web
// const server = http.createServer(app);
// server.listen(port, () => {
//   console.log(`http://localhost:${port}`);
// });



app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
