// const http = require("http");
const express = require("express");
const port = 5000;
const app = express();

app.use("/add-product", (req, res, next) => {
  console.log("This is Middleware");
  res.send("Add to Product");
  // Next is used for -> next instruction
  // next();
});
app.use("/", (req, res, next) => {
  console.log("This is another Middleware");
  res.send("Hello World!");
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
