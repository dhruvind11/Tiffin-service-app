// MenuManagement.js
import React, { useState } from 'react';
import MenuForm from './MenuForm';

const MenuManagement = () => {
  const [menuItems, setMenuItems] = useState([]);

  const addMenuItem = (menuItem) => {
    setMenuItems([...menuItems, menuItem]);
    // You can send the data to the backend for saving to MongoDB here.
  };

  return (
    <div>
      <h2>Menu Management</h2>
      <MenuForm addMenuItem={addMenuItem} />
      <ul>
        {menuItems.map((item, index) => (
          <li key={index}>
            <strong>Name:</strong> {item.name} <br />
            <strong>Description:</strong> {item.description} <br />
            <strong>Price:</strong> ${item.price.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuManagement;
