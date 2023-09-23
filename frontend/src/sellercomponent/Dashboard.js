// Dashboard.js
import React from 'react';
// import './style.css';
import  Header  from './Header'
import SellerDashboard from './SellerDashboard';
const Dashboard = () => {
  return (
    <><Header/>
    <section className="dashboard">
     
      <SellerDashboard/>
      {/* Dashboard content goes here */}
    </section></>
  );
};

export default Dashboard;
