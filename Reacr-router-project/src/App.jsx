import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Navbar from './Components/Navber/Navbar';


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar></Navbar></>,
    },
  ]);


  return (
    <>

      <RouterProvider router={router} />

    </>
  )
}

export default App
