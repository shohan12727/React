const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;


app.use(cors());

app.get('/', (req, res) => {
  res.send('user server is running');
});


const users = [
  { id: 1, name: "sabana", email: "sabana@gmail.com" },
  { id: 2, name: "sabnoor", email: "sabnoor@gmail.com" },
  { id: 3, name: "sabila", email: "sabila@gmail.com" },
  { id: 4, name: "tanvir", email: "tanvir@gmail.com" },
  { id: 5, name: "mahmud", email: "mahmud@gmail.com" },
  { id: 6, name: "nayeem", email: "nayeem@gmail.com" },
  { id: 7, name: "nafisa", email: "nafisa@gmail.com" },
  { id: 8, name: "maliha", email: "maliha@gmail.com" },
  { id: 9, name: "raihan", email: "raihan@gmail.com" },
  { id: 10, name: "mehazabien", email: "mehazabien@gmail.com" },
  { id: 11, name: "tamim", email: "tamim@gmail.com" },
  { id: 12, name: "anika", email: "anika@gmail.com" },
  { id: 13, name: "arafat", email: "arafat@gmail.com" },
  { id: 14, name: "maisha", email: "maisha@gmail.com" },
  { id: 15, name: "ayman", email: "ayman@gmail.com" },
  { id: 16, name: "samiha", email: "samiha@gmail.com" },
  { id: 17, name: "rashed", email: "rashed@gmail.com" },
  { id: 18, name: "rifat", email: "rifat@gmail.com" },
  { id: 19, name: "meherin", email: "meherin@gmail.com" },
  { id: 20, name: "tanjim", email: "tanjim@gmail.com" },
  { id: 21, name: "maruf", email: "maruf@gmail.com" },
  { id: 22, name: "sabbir", email: "sabbir@gmail.com" },
  { id: 23, name: "mim", email: "mim@gmail.com" },
  { id: 24, name: "sadia", email: "sadia@gmail.com" },
  { id: 25, name: "sharif", email: "sharif@gmail.com" },
  { id: 26, name: "tahsin", email: "tahsin@gmail.com" },
  { id: 27, name: "jubair", email: "jubair@gmail.com" },
  { id: 28, name: "sumaya", email: "sumaya@gmail.com" },
  { id: 29, name: "tasnim", email: "tasnim@gmail.com" },
  { id: 30, name: "rakib", email: "rakib@gmail.com" },
  { id: 31, name: "jannat", email: "jannat@gmail.com" },
  { id: 32, name: "rahim", email: "rahim@gmail.com" },
  { id: 33, name: "nahin", email: "nahin@gmail.com" },
  { id: 34, name: "alif", email: "alif@gmail.com" },
  { id: 35, name: "nisho", email: "nisho@gmail.com" },
  { id: 36, name: "tanjila", email: "tanjila@gmail.com" },
  { id: 37, name: "meem", email: "meem@gmail.com" },
  { id: 38, name: "nodi", email: "nodi@gmail.com" },
  { id: 39, name: "anik", email: "anik@gmail.com" },
  { id: 40, name: "shuvo", email: "shuvo@gmail.com" },
  { id: 41, name: "shanta", email: "shanta@gmail.com" },
  { id: 42, name: "bijoy", email: "bijoy@gmail.com" },
  { id: 43, name: "tarin", email: "tarin@gmail.com" },
  { id: 44, name: "farhan", email: "farhan@gmail.com" },
  { id: 45, name: "piash", email: "piash@gmail.com" },
  { id: 46, name: "moumita", email: "moumita@gmail.com" },
  { id: 47, name: "minhaz", email: "minhaz@gmail.com" },
  { id: 48, name: "azmir", email: "azmir@gmail.com" },
  { id: 49, name: "sabbirul", email: "sabbirul@gmail.com" },
  { id: 50, name: "sabrina", email: "sabrina@gmail.com" }
];


app.get('/users', (req, res) => {
  res.send(users);
});

app.listen(port, () => {
  console.log(`Users server running on port ${port}`);
});
