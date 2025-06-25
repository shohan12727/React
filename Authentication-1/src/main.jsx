import { StrictMode } from 'react'
import Home from './Components/Home';
import Root from './Layout/Root';
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter,RouterProvider } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root ,
    children: [
      { index: true, Component: Home }
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
