import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ background: '#5c3d2e', color: 'white', padding: '15px 20px' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/" style={{ color: '#d4a55a', textDecoration: 'none', fontSize: '1.5rem', fontWeight: 'bold' }}>
          🪵 Kalaakriti Woods
        </Link>
        <div style={{ display: 'flex', gap: '20px' }}>
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
          <a href="/admin.html" style={{ color: 'white', textDecoration: 'none' }}>Admin</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;