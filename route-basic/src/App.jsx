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
      element:<> <Navbar></Navbar> <Home></Home> </>,
    },
    {
      path: "/login",
      element:<> <Navbar></Navbar> <Login></Login> </>
    },
    {
        path:"/about",
        element:<> <Navbar></Navbar> <About></About> </>
    },
    {
      path:"/contacts",
      element:<>  <Navbar></Navbar> <Contacts></Contacts> </> 
    },

  ]);


  return (
    <>
      
      <RouterProvider router={router} />
    </>
  )
}

export default App
