import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ProductDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const phoneNumber = import.meta.env.VITE_OWNER_PHONE;

  useEffect(() => {
    fetch(`/api/products/slug/${slug}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [slug]);

  if (loading) return <div className="spinner"></div>;
  if (!product) return <div style={{ textAlign: 'center', padding: '40px' }}>Product not found</div>;

  const handleBookNow = () => {
    const msg = `Hello, I would like to BOOK this product:\n\n🪵 Product: ${product.name}\n💰 Price: ₹${product.price}\n📏 Size: ${product.dimensions || 'Not specified'}\n🌳 Wood: ${product.woodType || 'Not specified'}`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <>
      <Navbar />
      <div className="container" style={{ padding: '40px 20px' }}>
        <button onClick={() => navigate(-1)} style={{ marginBottom: '20px', background: 'none', border: 'none', color: '#5c3d2e', cursor: 'pointer' }}>← Back</button>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
          <img src={product.mainImage || 'https://via.placeholder.com/500'} alt={product.name} style={{ width: '100%', borderRadius: '12px' }} />
          <div>
            <h1 style={{ color: '#5c3d2e', marginBottom: '10px' }}>{product.name}</h1>
            <p style={{ color: '#8d6e63', marginBottom: '10px' }}>{product.category}</p>
            <p style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#d4a55a', marginBottom: '20px' }}>₹{product.price.toLocaleString()}</p>
            <div style={{ background: '#f5efe7', padding: '15px', borderRadius: '8px', marginBottom: '20px' }}>
              <p><strong>📏 Dimensions:</strong> {product.dimensions || 'Not specified'}</p>
              <p><strong>🌳 Wood Type:</strong> {product.woodType || 'Not specified'}</p>
            </div>
            <p style={{ marginBottom: '30px', lineHeight: '1.6' }}>{product.description}</p>
            <button onClick={handleBookNow} style={{ width: '100%', padding: '12px', background: '#25d366', color: 'white', border: 'none', borderRadius: '8px', fontSize: '1rem', fontWeight: 'bold', cursor: 'pointer' }}>📖 Book on WhatsApp</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetail;