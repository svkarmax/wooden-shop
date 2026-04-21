import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const phoneNumber = import.meta.env.VITE_OWNER_PHONE;

  const handleBookNow = (e) => {
    e.stopPropagation();
    const msg = `Hello, I would like to BOOK this product:\n\n🪵 Product: ${product.name}\n💰 Price: ₹${product.price}\n📏 Size: ${product.dimensions || 'Not specified'}\n🌳 Wood: ${product.woodType || 'Not specified'}`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div onClick={() => navigate(`/product/${product.slug}`)} style={{ background: 'white', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', cursor: 'pointer', transition: 'transform 0.3s' }}>
      <img src={product.mainImage || 'https://via.placeholder.com/400'} alt={product.name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
      <div style={{ padding: '15px' }}>
        <h3 style={{ fontSize: '1rem', marginBottom: '5px' }}>{product.name}</h3>
        <p style={{ color: '#d4a55a', fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '10px' }}>₹{product.price.toLocaleString()}</p>
        <p style={{ fontSize: '0.8rem', color: '#8d6e63', marginBottom: '10px' }}>{product.category}</p>
        <button onClick={handleBookNow} style={{ width: '100%', padding: '8px', background: '#25d366', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>💬 Book Now</button>
      </div>
    </div>
  );
};

export default ProductCard;