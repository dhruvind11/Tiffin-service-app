import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const MenuItemDetail = () => {
  const { itemId } = useParams();
  const [menuItem, setMenuItem] = useState({}); 

  useEffect(() => {
    
    axios.get(`http://localhost:8080/api/v1/menu/getById/${itemId}`).then(response => {
        setMenuItem(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error fetching menu item:', error);
      });
  }, [itemId]);

  return (
    <div>
      <h2>Menu Item Detail</h2>
      {menuItem ? (
        <>
          <p>Item ID: {itemId}</p>
          <p>Name: {menuItem.name}</p>
          <p>Description: {menuItem.description}</p>
          <p>Price: {menuItem.price}</p>
          <div>Image: <img src={`/images/${menuItem.image}`} alt={menuItem.name} /></div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MenuItemDetail;
