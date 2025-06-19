import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Navbar from './Components/Navber/Navbar';
import Body from './Components/Body/Body';
import Footer from './Components/Footer/Footer';
import LoginForm from './Components/LoginForm/LoginForm';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar></Navbar><Body></Body><Footer></Footer></>,
    },
    {
      path:"/login",
      element: <LoginForm></LoginForm>
    },
    {
      path: "/about",
      element: <><Navbar></Navbar><About></About><Footer></Footer></>
    },
    {
      path:"/contact",
      element: <><Navbar></Navbar><Contact></Contact><Footer></Footer></>
    }
  ]);


  return (
    <>

      <RouterProvider router={router} />

    </>
  )
}

export default App
