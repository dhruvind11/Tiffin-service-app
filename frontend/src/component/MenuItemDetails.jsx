import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import './MenuItem.css';

const MenuItemDetail = () => {
  const { itemId } = useParams();
  const [menuItem, setMenuItem] = useState({}); 
  const [quantity, setQuantity] = useState(1);


  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

 
  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  useEffect(() => {
    
    axios.get(`http://localhost:8080/api/v1/menu/getById/${itemId}`).then(response => {
        setMenuItem(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error fetching menu item:', error);
      });
  }, [itemId]);

  const total = menuItem.price * quantity;
  return (
    <div>
      <h2 className="text-center">Menu Item Detail</h2>
         <div className="row">
            <div className="col-6">
            <img src={`/images/${menuItem.image}`} alt={menuItem.name} className='img-fluid'/>
            <p><span className="fw-bold">Meal Plan:</span> Trial (1 day), Weekly (5 Days), Monthly (20 Days)</p>
            <h4>Please read Offer & Terms:</h4>
            <p>Cut-off time is 8:00 PM the previous day which means place an order before the cut-off time</p>
            <p>Flexi Plans: If changes in current orders, skip a delivery, pause the plan, or cancel your plan, kindly inform us before the cut-off time. </p>
            <p>Delivery time may affect by +/- 45 mins depending on traffic, road closures and weather conditions</p>
            <p>Extra items should only be ordered along with a meal plan and from the same seller onlyExtra items should only be ordered along with a meal plan and from the same seller only   </p>
            <p>Refund Policy: A cancellation fee of $5 on a trial order and $10 on all other orders is applicable.</p>
            </div>
            <div className="col-6">
                <form action="">

                <p className="fs-2 fw-bold">{menuItem.name}</p>
          <p className="fs-5">{menuItem.description}</p>
          <p className="text-danger fs-2">&#8377;{menuItem.price}</p>
          <div className="form-group">
        <label htmlFor="meal">Meal Plan</label>
       <select className="form-select" aria-label="Default select example">
  <option selected>Trial</option>
  <option value={1}>Weekly</option>
  <option value={2}>Monthly</option>
  
</select>

      </div>
      
      <div className="container my-4">
      <p className="fw-bold fs-5">Select Delivery Time</p>
      <div className="row">
        <div className="col-md-4 mb-3">
       <div className="form-check">
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
  <label className="form-check-label" htmlFor="flexRadioDefault1">
  10 AM to 12 AM
  </label>
</div>


        </div>
        <div className="col-md-4 mb-3">
        <div className="form-check">
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
  <label className="form-check-label" htmlFor="flexRadioDefault1">
  12 PM to 2 PM
  </label>
</div>
        </div>
        <div className="col-md-4 mb-3">
        <div className="form-check">
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
  <label className="form-check-label" htmlFor="flexRadioDefault1">
  6 PM to 7 PM
  </label>
</div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 mb-3">
        <div className="form-check">
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
  <label className="form-check-label" htmlFor="flexRadioDefault1">
  7 PM to 8 PM
  </label>
</div>
        </div>
        <div className="col-md-4 mb-3">
        <div className="form-check">
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
  <label className="form-check-label" htmlFor="flexRadioDefault1">
  8 PM to 9 PM
  </label>
</div>
        </div>
        <div className="col-md-4 mb-3">
        <div className="form-check">
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
  <label className="form-check-label" htmlFor="flexRadioDefault1">
  9 PM to 10 PM
  </label>
</div>
        </div>
      </div>
    </div>
  

  
    <div className="mb-3">
        <label htmlFor="quantity" className="fw-bold">
          Quantity:
        </label>
        <div className="input-group">
          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={handleDecrement}
          >
            -
          </button>
          <input
            type="number"
            id="quantity"
            name="quantity"
            className="form-control text-center"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
          />
          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={handleIncrement}>
            +
          </button>
        </div>
      </div>
      
      <div className="mb-3">
            <label htmlFor="cookingInstruction" className="fs-4 fw-bold">Cooking Instructions</label>
            <input
              className="form-control"
              type="text"
              id="cookingInstruction"
              placeholder="Add cooking instruction"
              aria-label="Cooking Instruction"
            />
          </div>

          <p className="fs-4 fw-bold">Total Price: &#8377;{total}</p>
          <button type="button" className="btn btn-success btn-lg d-block mx-auto">
            Order Now
          </button>

         </form>
          
            </div>
         </div>
        
          
          
        
      
    </div>
  );
};

export default MenuItemDetail;
