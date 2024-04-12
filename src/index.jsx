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
import CartPage from './shop/CartPage';
import { About } from './about/About';
import Contact from './contactPage/Contact';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router basename="/Shop-Cart">
    <Routes>
      <Route  element={<App/>}> 
        <Route index element={<Home />} />
        <Route path="blog" element={<Blog />} />
        <Route path="shop" element={<Shop />} />
        <Route path="shop/:id" element={<SingleProduct />} />
        <Route path="/cart-page" element={<CartPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  </Router>
);


//path="/"