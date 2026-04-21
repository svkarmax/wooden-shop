import React from 'react';
import ProductCard from './ProductCard';

const ProductGrid = ({ products, loading }) => {
  if (loading) return <div className="spinner"></div>;
  if (products.length === 0) return <p style={{ textAlign: 'center', padding: '40px' }}>No products found.</p>;

  return (
    <div className="products-grid">
      {products.map(product => <ProductCard key={product._id} product={product} />)}
    </div>
  );
};

export default ProductGrid;