import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src="/logo.jpg" alt="Cardinal Logo" />
      </div>

      <h2>Chirp</h2>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
      </nav>
    </div>
  );
};

export default Sidebar;
