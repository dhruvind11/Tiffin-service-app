// Order.js
import React, { useState } from 'react';
import './Orders.css';
import  Header from './Header' // Import the OrderDetailsModal component

const Orders = () => {
  
  const [selectedOrder, setSelectedOrder] = useState(null);

  const orders = [
   
    {
      id: 1,
      customer: 'John Doe',
      address: '123 Main Street, City, Country',
      items: ['Item 1', 'Item 2'],
      total: 25.99,
    },
    {
      id: 1,
      customer: 'John Doe',
      address: '123 Main Street, City, Country',
      items: ['Item 1', 'Item 2'],
      total: 25.99,
    },
    {
      id: 1,
      customer: 'John Doe',
      address: '123 Main Street, City, Country',
      items: ['Item 1', 'Item 2'],
      total: 25.99,
    },
    // Add more orders as needed
  ];
 

 return (<><Header/>
 <div>
   <h2>Orders</h2>
   <div className="orders-container">
     {orders.map((order) => (
       <div className="order-card" key={order.id}>
         <h3>Order #{order.id}</h3>
         <p>Customer: {order.customer}</p>
         <p>Address: {order.address}</p> {/* Display the address */}
         <p>Total: ${order.total.toFixed(2)}</p>
         <button
           className="view-details-button"
          
         >
           View Details
         </button>
       </div>
     ))}
   </div>
   
 </div></>
);
    }

export default Orders;
