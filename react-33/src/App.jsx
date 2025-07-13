import { useEffect, useState } from 'react'
import './App.css'

function App() {
  

  const [user,setUser] = useState([]);
  
  useEffect( () => {
    fetch("http://localhost:3000/user").then(res => res.json()).then(data => {
      console.log(data);
      setUser(data)
    })
  },[]

  )
   
  return (
    <>
     <p>Hi, friend i am ripon video</p>
     <h1>আম গাছ, জাম গাছ, কাঁঠাল গাছ — আজকালকার মেয়েরা সব চিটিং বাজ, চিটিং বাজ!"</h1>
     {
      user.map(singleUser => ( 
        <div>
        <p>Name: {singleUser.name}</p>
        <p>Email: {singleUser.email}</p>
        <p>Age: {singleUser.age}</p>
        <p>IsActive: {singleUser.isActive.toString()}</p>
        </div>
      ))
     }
    </>
  )
}

export default App
