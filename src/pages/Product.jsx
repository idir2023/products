// pages/Product.js
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'; // Import Link

const Product = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center">Loading products...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-center">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <Link key={product.id} to={`/products/${product.id}`}>
            <div className="border rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <img
                className="w-full h-64 object-cover rounded-t-lg"
                src={product.images[0] || 'fallback_image_url_here'}
                alt={product.title}
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
                <p className="text-gray-700 mb-4">
                  {product.description.length > 100
                    ? product.description.slice(0, 100) + '...'
                    : product.description}
                </p>
                <p className="text-lg font-semibold text-green-600 mb-4">${product.price}</p>
                <button
                  onClick={(e) => {
                    e.preventDefault(); // Prevents the link from being followed
                    addToCart(product);
                  }}
                  className="mt-4 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-500 transition duration-300"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

Product.propTypes = {
  addToCart: PropTypes.func.isRequired,
};

export default Product;
