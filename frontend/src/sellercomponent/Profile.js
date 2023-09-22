// Profile.js
import React, { useState } from 'react';
import './Profile.css'; // Import the CSS file
import  Header from './Header'
const Profile = () => {
  // Sample user profile data (replace with your data)
  const [userProfile, setUserProfile] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@example.com',
    phone: '123-456-7890',
    address: '123 Main St, City, Country',
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    // Save the updated user profile data to the server (implement backend integration)
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    // Revert any changes made during editing
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserProfile({
      ...userProfile,
      [name]: value,
    });
  };

  return (<><Header/>
  <div className="profile">
    <h2>My Profile</h2>
    <div className="profile-info">
      <div className="profile-field">
        <label>First Name:</label>
        {isEditing ? (
          <input
            type="text"
            name="firstName"
            value={userProfile.firstName}
            onChange={handleChange}
          />
        ) : (
          <span>{userProfile.firstName}</span>
        )}
      </div>
      <div className="profile-field">
        <label>Last Name:</label>
        {isEditing ? (
          <input
            type="text"
            name="lastName"
            value={userProfile.lastName}
            onChange={handleChange}
          />
        ) : (
          <span>{userProfile.lastName}</span>
        )}
      </div>
      <div className="profile-field">
        <label>Email:</label>
        {isEditing ? (
          <input
            type="email"
            name="email"
            value={userProfile.email}
            onChange={handleChange}
          />
        ) : (
          <span>{userProfile.email}</span>
        )}
      </div>
      <div className="profile-field">
        <label>Phone:</label>
        {isEditing ? (
          <input
            type="tel"
            name="phone"
            value={userProfile.phone}
            onChange={handleChange}
          />
        ) : (
          <span>{userProfile.phone}</span>
        )}
      </div>
      <div className="profile-field">
        <label>Address:</label>
        {isEditing ? (
          <textarea
            name="address"
            value={userProfile.address}
            onChange={handleChange}
          />
        ) : (
          <span>{userProfile.address}</span>
        )}
      </div>
    </div>
    {isEditing ? (
      <div className="profile-actions">
        <button className="save-button" onClick={handleSaveClick}>
          Save
        </button>
        <button className="cancel-button" onClick={handleCancelClick}>
          Cancel
        </button>
      </div>
    ) : (
      <button className="edit-button" onClick={handleEditClick}>
        Edit Profile
      </button>
    )}
  </div></>
  );
};

export default Profile;
