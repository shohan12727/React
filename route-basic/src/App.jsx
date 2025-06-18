import About from "./Components/About";
import Contacts from "./Components/Contacts";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
    },
    {
      path: "/login",
      element: <Login></Login>
    },
    {
        path:"/about",
        element: <About></About>
    },
    {
      path:"/contacts",
      element: <Contacts></Contacts>
    },

  ]);


  return (
    <>
      <Navbar></Navbar>
      <RouterProvider router={router} />
    </>
  )
}

export default App
