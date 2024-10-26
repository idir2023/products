// Header.js
import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaShoppingCart, FaSignInAlt, FaUserPlus } from "react-icons/fa";

export default function Header({ cartCount }) {
  return (
    <header className="bg-white shadow-lg py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
        <div className="text-3xl font-bold text-gray-800">
          <Link to="/">
            Store<span className="text-red-600">Idir</span>
          </Link>
        </div>
        <nav className="flex items-center space-x-6">
          <Link to="/" className="text-lg flex items-center gap-2 text-gray-600 hover:text-red-600 transition duration-300">
            <FaHome />
            Home
          </Link>
          <Link to="/products" className="text-lg flex items-center gap-2 text-gray-600 hover:text-red-600 transition duration-300">
            <FaShoppingCart />
            Products
          </Link>
          <Link to="/login" className="text-lg flex items-center gap-2 text-gray-600 hover:text-red-600 transition duration-300">
            <FaSignInAlt />
            Login
          </Link>
          <Link to="/signup" className="text-lg flex items-center gap-2 text-gray-600 hover:text-red-600 transition duration-300">
            <FaUserPlus />
            Signup
          </Link>
          <Link to="/card" className="relative flex items-center">
            <FaShoppingCart className="text-lg text-gray-600" />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-red-600 text-white rounded-full text-xs px-2">
                {cartCount}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
}
