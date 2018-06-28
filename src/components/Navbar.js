import React from 'react';
import '../styles/components/navbar.css';

export default function Navbar() {
  return (
    <div className="navbar">
      <a href="javascript:void(0)" className="navbar__logo">
        MWD
      </a>

      <div className="navbar__links-container">
        <a href="javascript:void(0)" className="navbar__link">About</a>
        <a href="javascript:void(0)" className="navbar__link">Contact</a>
      </div>
    </div>
  );
}
