import Users from './Components/Users';
import './App.css'
const userspromise = fetch('http://localhost:3000/users')
.then(res => res.json());


function App() {
  

  return (
    <>
      <h2>Users Management for client</h2>
      <Users userspromise={userspromise}></Users>
    </>
  )
}

export default App
