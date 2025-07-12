const express = require("express");
const app = express();
const port = 4000;


app.get('/', (req,res) => {
  res.send ('Hi, I am Shohan')
})
//shohan
app.listen(port, () => {
  console.log(`This server is running on http://localhost:${port}`)
})