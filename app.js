// const http = require("http");
const express = require("express");
const bodyParser = require('body-parser')
// Local Imports 
// Routes
const adminRoutes =require('./routes/admin')
const shopRoutes=require('./routes/shop')
// Routes End
// Confiq
const port = 5000;
const app = express();
app.use(bodyParser.urlencoded({extended:false}));
// Confiq End
app.use('/admin',adminRoutes);
app.use(shopRoutes);

// Default Page

app.use((req,res,next)=>{
   res.status(404).send("Page Not Found!")
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
