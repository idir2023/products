// pages/ShowProduct.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ShowProduct = ({ addToCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div className="text-center">Loading product details...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
      <img className="w-full h-64 object-cover mb-4" src={product.images[0]} alt={product.title} />
      <p className="text-lg mb-4">{product.description}</p>
      <p className="text-xl font-semibold text-green-600 mb-4">${product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-500 transition duration-300"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ShowProduct;
