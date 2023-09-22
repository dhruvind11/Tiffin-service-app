// OrderDetailsModal.js
import React from 'react';
import './OrderDetailsModal.css';

const OrderDetailsModal = ({ order, onClose }) => {
  return (
    <div className="order-details-modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>Order Details</h2>
        <div className="order-info">
          <p><strong>Customer:</strong> {order.customer}</p>
          <p><strong>Address:</strong> {order.address}</p> {/* Display the address */}
          <p><strong>Total:</strong> ${order.total.toFixed(2)}</p>
          <hr />
          <h3>Items</h3>
          <ul>
            {order.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          {/* Add more order details as needed */}
        </div>
      </div>
    </div>
  );
};

export default OrderDetailsModal;
