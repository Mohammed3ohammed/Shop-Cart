import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './App';
import Home from './home/Home';
import Blog from './blog/Blog';
import Shop from './shop/Shop';
import SingleProduct from './shop/SingleProduct';
import './index.css';

import 'swiper/css';

// bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

// fonts and icons
import './assets/css/icofont.min.css';
import './assets/css/animate.css';
import './assets/css/style.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <App />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/shop/:id" element={<SingleProduct />} />
    </Routes>
  </Router>
);

