// App.js
import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Router from "./routers/index";
import Footer from "./components/Footer";

function App() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <>
      <Header cartCount={cartCount} />
      <Hero />
      <Router setCartCount={setCartCount} /> {/* Pass setCartCount to update the cart count */}
      <Footer />
    </>
  );
}

export default App;
