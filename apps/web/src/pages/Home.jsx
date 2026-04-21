import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductGrid from '../components/ProductGrid';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Navbar />
      <div style={{ background: 'linear-gradient(135deg, #5c3d2e, #8b5a2b)', color: 'white', textAlign: 'center', padding: '60px 20px' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '10px' }}>🪵 Kalaakriti Woods</h1>
        <p>Handcrafted wooden temples, idols & pooja items for your sacred space</p>
      </div>
      <div className="container">
        <ProductGrid products={products} loading={loading} />
      </div>
      <Footer />
    </>
  );
};

export default Home;