const express = require("express");
const app = express();
const port = 3000;

app.get('/', (req,res) => {
  res.send("Hi, there! I am Shohan and live in Dhaka")
})


app.listen(port, ()=> {
  console.log(`This server is running on http://localhost:${port}`);
  
})