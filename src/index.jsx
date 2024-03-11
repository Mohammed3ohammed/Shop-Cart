import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'

import 'swiper/css';

// bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


// fonts and icons
import '././assets/css/icofont.min.css';
import '././assets/css/animate.css';
import '././assets/css/style.min.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './home/Home';
import Blog from './blog/Blog';
import Shop from './shop/Shop';
import SingleProduct from './shop/SingleProduct';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
         path: "/", element: <Home /> 
        },
      {
         path: "/blog", element: <Blog />
    },
    {
      path: "/shop", element: <Shop />
    },
    {
      path: 'shop/:id', element: <SingleProduct  />
    }
    ]
  },
]);

 ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
