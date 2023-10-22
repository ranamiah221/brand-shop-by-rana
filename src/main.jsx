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
import UpdatedProduct from './Pages/UpdatedProduct/UpdatedProduct';
import ViewProduct from './Pages/Product/ViewProduct/ViewProduct';
import PrivateRoute from './providers/PrivateRoute';


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
        element:<PrivateRoute><AddProduct></AddProduct></PrivateRoute>
      },
      {
        path:'/product',
        element: <Product></Product>,
         loader:()=> fetch('https://brand-shop-server-gik7rup7e-ranas-projects-c2243bd3.vercel.app/product') 
      },
      {
        path:'/product/:id',
        element: <UpdatedProduct></UpdatedProduct>,
         loader:({params})=> fetch(`https://brand-shop-server-gik7rup7e-ranas-projects-c2243bd3.vercel.app/${params.id}`)   
      },
      {
        path:'/view/:id',
        element: <PrivateRoute><ViewProduct></ViewProduct></PrivateRoute>,
         loader:({params})=> fetch(`https://brand-shop-server-gik7rup7e-ranas-projects-c2243bd3.vercel.app/product/${params.id}`)   
      },
      {
        path:'/myCart',
        element:<PrivateRoute><MyCart></MyCart></PrivateRoute>,
        loader: ()=> fetch('https://brand-shop-server-gik7rup7e-ranas-projects-c2243bd3.vercel.app/myCart')
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
