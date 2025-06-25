import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Root from './Layout/Root';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';

const router = createBrowserRouter ([
  {
    path: '/',
    element: <Root></Root>,
    children: [
      {path: "" ,
        element: <Home></Home>
      },
      {
        path:"about",
        element: <About></About>
      },
      {
        path:"projects",
        element: <Projects></Projects>
      },
      {
        path:"contact",
        element: <Contact></Contact>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
