// src/components/Header.js
import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">My Blog</div>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/about">About</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;