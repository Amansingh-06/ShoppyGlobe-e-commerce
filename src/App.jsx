import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import ProductList from './components/Product/ProductList/ProductList';
import ProductDetail from './components/Product/ProductDetail/ProductDetail';
import CartItem from './components/Cart/CartItem';
import NotFound from './components/Product/NotFound/NotFound';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<CartItem />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
    
  );
};

export default App;
