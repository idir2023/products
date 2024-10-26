// routers/index.js
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Products from "../pages/Product";
import ShowProduct from "../pages/ShowProduct";
import Card from "../pages/Card";

export default function Index({ setCartCount }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const isProductInCart = prevCart.some((item) => item.id === product.id);
      if (!isProductInCart) {
        const newCart = [...prevCart, product];
        setCartCount(newCart.length);
        return newCart;
      }
      return prevCart;
    });
  };

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products addToCart={addToCart} />} />
      <Route path="/products/:id" element={<ShowProduct addToCart={addToCart} />} />
      <Route path="/card" element={<Card />} />
    </Routes>
  );
}
