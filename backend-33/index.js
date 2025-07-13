const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());

const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    age: 28,
    isActive: true,
    joinedAt: "2023-05-10",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    age: 32,
    isActive: false,
    joinedAt: "2022-12-01",
  },
  {
    id: 3,
    name: "Ali Hossain",
    email: "ali.hossain@example.com",
    age: 24,
    isActive: true,
    joinedAt: "2023-09-18",
  },
  {
    id: 4,
    name: "Maria Garcia",
    email: "maria.garcia@example.com",
    age: 30,
    isActive: true,
    joinedAt: "2024-01-25",
  },
  {
    id: 5,
    name: "Tom Lee",
    email: "tom.lee@example.com",
    age: 27,
    isActive: false,
    joinedAt: "2023-03-30",
  }
];

const products = [
  {
    id: 101,
    name: "Wireless Headphones",
    price: 3500,
    category: "Electronics",
    inStock: true,
    rating: 4.3
  },
  {
    id: 102,
    name: "Gaming Mouse",
    price: 1200,
    category: "Accessories",
    inStock: false,
    rating: 4.0
  },
  {
    id: 103,
    name: "Mechanical Keyboard",
    price: 4800,
    category: "Accessories",
    inStock: true,
    rating: 4.7
  }
];

const posts = [
  {
    id: 1,
    title: "Understanding React Hooks",
    author: "Shohan",
    published: true,
    tags: ["React", "JavaScript", "Hooks"],
    createdAt: "2025-07-01"
  },
  {
    id: 2,
    title: "10 Tips for Clean CSS",
    author: "Ayesha Khatun",
    published: false,
    tags: ["CSS", "Frontend", "Best Practices"],
    createdAt: "2025-06-20"
  }
];

const tasks = [
  {
    id: 1,
    title: "Fix navbar responsiveness",
    completed: false,
    priority: "high",
    dueDate: "2025-07-15"
  },
  {
    id: 2,
    title: "Update API docs",
    completed: true,
    priority: "low",
    dueDate: "2025-07-05"
  },
  {
    id: 3,
    title: "Deploy to Vercel",
    completed: false,
    priority: "medium",
    dueDate: "2025-07-14"
  }
];


app.get('/', (req,res) => {
  res.send("Hi, I am shohan")
})

app.get('/user', (req,res) => {
  res.send(users)
})

app.get('/product', (req,res) => {
  res.send(products)
})

app.get('/post', (req,res) => {
  res.send(posts)
})

app.get('/task', (req,res) => {
  res.send(tasks)
})


app.listen(port, () => {
  console.log(`litening the ${port}`);
  
})