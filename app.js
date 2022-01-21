const  path  = require("path");
// const http = require("http");
const express = require("express");
const bodyParser = require('body-parser')
// Local Imports 
// Routes
const adminRoutes =require('./routes/admin')
const shopRoutes=require('./routes/shop');
// Confiq
const port = 5000;
const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));
app.use((req,res,next)=>{
  console.log("Action Checks");
  next()
});
// Confiq End
app.use('/admin',adminRoutes);
app.use(shopRoutes);

// Default Page

app.use((req,res,next)=>{
  // res.status(404).send("Page Not Found!")
  res.status(404).sendFile(path.join(__dirname,'views','404.html'))

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
