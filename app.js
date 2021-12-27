// const http = require("http");
const express = require("express");
const bodyParser = require('body-parser')
const port = 5000;
const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use("/add-product", (req, res, next) => {
  // console.log("This is Middleware");
  
  // res.send("Add to Product");
  res.send('<form action="/product" method="POST"><input type="text" name="title"> <button type="submit">+</button></form>');

  // Next is used for -> next instruction
  // next();
});
app.post('/product',(req,res,next)=>{
  console.log(req.body);
   res.redirect('/')
});

app.use("/", (req, res, next) => {
  console.log("This is another Middleware");
  res.send('Home Page')
});
// Output Web
// End Output Web
// const server = http.createServer(app);
// server.listen(port, () => {
//   console.log(`http://localhost:${port}`);
// });



app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
