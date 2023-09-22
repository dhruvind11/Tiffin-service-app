// Dashboard.js
import React from 'react';
import './styles.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SellerDashboard from './SellerDashboard';
const Dashboard = () => {
  return (
    <section className="dashboard">
     
      <SellerDashboard/>
      {/* Dashboard content goes here */}
    </section>
  );
};

export default Dashboard;
