import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import AboutPage from './routes/RegisterPage.jsx'
import CatalogPage from './routes/CatalogPage.jsx'
import CartPage from './routes/CartPage.jsx'
import RegisterPage from './routes/RegisterPage.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<AboutPage />} />
      <Route path="catalog" element={<CatalogPage />} />
      <Route path="cart" element={<CartPage />} />
      <Route path="register" element={<RegisterPage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
