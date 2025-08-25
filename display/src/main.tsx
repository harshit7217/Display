import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Home from './components/Home/Home'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path='' element={<Home />} />
    </Route>
  )
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    < RouterProvider router={router} />
  </StrictMode>,
)
