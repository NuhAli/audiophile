import React from 'react';
import './App.scss';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";
import ProductPage from './pages/ProductPage';
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/products/:category'} element={<CategoryPage />} />
        <Route path={'/products/:category/:id'} element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
