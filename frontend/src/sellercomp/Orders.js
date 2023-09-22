// Orders.js
import React from 'react';
import './Orders.css'; // Import the CSS file

const Orders = () => {
  // Sample data for orders (replace with your data)
  const orders = [
    {
      id: 1,
      customer: 'John Doe',
      items: ['Item 1', 'Item 2'],
      total: 25.99,
    },
    // Add more orders as needed
  ];

  return (
    <div className="orders">
      <h2>Orders</h2>
      <div className="order-cards">
        {orders.map((order) => (
          <div className="order-card" key={order.id}>
            <div className="order-info">
              <strong>Customer:</strong> {order.customer} <br />
              <strong>Items:</strong> {order.items.join(', ')} <br />
              <strong>Total:</strong> ${order.total.toFixed(2)}
            </div>
            <button className="order-button">View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
