import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Layout/Root/Root';
import ErrorPage from './Layout/ErrorPage/ErrorPage';
import Home from './Pages/Home/Home';
import AddProduct from './Pages/AddProduct/AddProduct';
import MyCart from './Pages/MyCart/MyCart';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import AuthProvider from './providers/AuthProvider';
import Product from './Pages/Product/Product';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,

    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader:()=> fetch('brandInfo.json'),
      },
      {
        path:'/addProduct',
        element:<AddProduct></AddProduct>
      },
      {
        path:'/product',
        element: <Product></Product>,
         loader:()=> fetch('http://localhost:5000/product')
        
      },
      {
        path:'/myCart',
        element:<MyCart></MyCart>
      },
      {
        path:'/login',
        element:<Login></Login>,
      },
      {
        path:'/register',
        element:<Register></Register>,
      },


    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthProvider>
  <RouterProvider router={router}></RouterProvider>
  </AuthProvider>
  </React.StrictMode>,
)
