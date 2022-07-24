import React, {useEffect, useState} from 'react';
import './App.scss';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";
import ProductPage from './pages/ProductPage';
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import CartModal from "./components/CartModal/CartModal";
import modalVisible$ from "./observables/modalVisible$";
import CheckoutPage from "./pages/CheckoutPage";

const App = () => {

    const [showModal,setShowModal] = useState(false)

    useEffect(() => {
        modalVisible$.subscribe(status => {
            setShowModal(status)
        })
    },[])

  return (
    <BrowserRouter>
      <ScrollToTop />
        {showModal && <CartModal />}
      <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/products/:category'} element={<CategoryPage />} />
          <Route path={'/products/:category/:id'} element={<ProductPage />} />
          <Route path={'/cart'} element={<CheckoutPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
