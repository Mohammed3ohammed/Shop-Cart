// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';
// import './index.css'

// import 'swiper/css';

// // bootstrap css
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js';


// // fonts and icons
// import '././assets/css/icofont.min.css';
// import '././assets/css/animate.css';
// import '././assets/css/style.min.css';

// import Home from './home/Home';
// import Blog from './blog/Blog';
// import Shop from './shop/Shop';
// import SingleProduct from './shop/SingleProduct';
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,

//     children: [
//       {
//          path: "/", element: <Home /> 
//         },
//       {
//          path: "/blog", element: <Blog />
//     },
//     {
//       path: "/shop", element: <Shop />
//     },
//     {
//       path: 'shop/:id', element: <SingleProduct  />
//     }
//     ]
//   },
// ]);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <RouterProvider router={router} />

// );

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import './index.css';

import 'swiper/css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import './assets/css/icofont.min.css';
import './assets/css/animate.css';
import './assets/css/style.min.css';

import Home from './home/Home';
import Blog from './blog/Blog';
import Shop from './shop/Shop';
import SingleProduct from './shop/SingleProduct';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path="/" element={<App/>}>
        <Route index element={<Home />} />
        <Route path="blog" element={<Blog />} />
        <Route path="shop" element={<Shop />} />
        <Route path="shop/:id" element={<SingleProduct />} />
      </Route>
    </Routes>
  </Router>
);

