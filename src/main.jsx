import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import route from './route/Route.jsx'
import { RouterProvider } from 'react-router-dom'
import Contex, { Dashbordcontex } from './contex/Contex.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Contex>
    <RouterProvider router={route} />
    </Contex>
  </StrictMode>,
)
