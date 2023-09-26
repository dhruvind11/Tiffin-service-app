// MenuManagement.js
import React, { useState } from 'react';
import MenuForm from './MenuForm';
import  Header  from './Header'

const MenuManagement = () => {
  const [menuItems, setMenuItems] = useState([]);

  const addMenuItem = (menuItem) => {
    setMenuItems([...menuItems, menuItem]);
    // You can send the data to the backend for saving to MongoDB here.
  };

  return (
   <> <Header/><div     style={{
    backgroundImage:
      "url('https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80')",
      minHeight: '100vh',
    backgroundPosition: 'center',
    backgroundSize: "cover"
  }}>
   
   <MenuForm addMenuItem={addMenuItem} />
   <ul>
     {menuItems.map((item, index) => (
       <li key={index}>
         <strong>Name:</strong> {item.name} <br />
         <strong>Description:</strong> {item.description} <br />
         <strong>Price:</strong> ${item.price}
       </li>
     ))}
   </ul>
 </div></>
  );
};

export default MenuManagement;
