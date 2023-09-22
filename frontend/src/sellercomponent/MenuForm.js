// MenuForm.js
import React, { useState } from 'react';
import './MenuForm.css'
const MenuForm = ({ addMenuItem }) => {
  const [menuItem, setMenuItem] = useState({
    name: '',
    description: '',
    price: 0,
    image: null, // Store the selected image file
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMenuItem({
      ...menuItem,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const imageFile = e.target.files[0];
    setMenuItem({
      ...menuItem,
      image: imageFile,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create a FormData object to handle file uploads
    const formData = new FormData();
    formData.append('name', menuItem.name);
    formData.append('description', menuItem.description);
    formData.append('price', menuItem.price);
    formData.append('image', menuItem.image);

    addMenuItem(formData); // Send FormData to parent component
    setMenuItem({
      name: '',
      description: '',
      price: 0,
      image: null,
    });
  };

  return (
   <> <form className="menu-form" onSubmit={handleSubmit}>
   <div className="form-group">
     <label htmlFor="name">Name:</label>
     <input
       type="text"
       id="name"
       name="name"
       value={menuItem.name}
       onChange={handleChange}
       required
     />
   </div>
   <div className="form-group">
     <label htmlFor="description">Description:</label>
     <textarea
       id="description"
       name="description"
       value={menuItem.description}
       onChange={handleChange}
       required
     />
   </div>
   <div className="form-group">
     <label htmlFor="price">Price:</label>
     <input
       type="number"
       id="price"
       name="price"
       value={menuItem.price}
       onChange={handleChange}
       required
     />
   </div>
   <div className="form-group">
     <label htmlFor="image">Image:</label>
     <input
       type="file"
       id="image"
       name="image"
       accept="image/*"
       onChange={handleImageChange}
       required
     />
   </div>
   <button type="submit">Add Menu Item</button>
 </form></>
  );
};

export default MenuForm;
