// Header.js
import React from 'react';

const Header = () => {
  return (
    <header>
      <div className="logo">Your Logo</div>
      <nav>
        <ul>
          <li><a href="/">Dashboard</a></li>
          <li><a href="/menu">Menu Management</a></li>
          <li><a href="/orders">Orders</a></li>
          <li><a href="/profile">Profile</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
