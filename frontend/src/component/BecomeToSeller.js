import React from 'react'
import { Button } from 'react-bootstrap'

function BecomeToSeller() {
  return (
    <div style={{padding:"150px"}}>
      <h1 className='text-center'>Partner Us</h1>
      <div>
        <form
          className="col-sm-4 offset-sm-4">
            <input
            type="text"
            className="form-control border border-dark rounded-2"placeholder="tiffin service name"/><br/>
          <input
            type="text"
            className="form-control border border-dark rounded-2"
            
            placeholder="Full name"
          />
          <br />
          <input
            type="email"
            
            className="form-control border border-dark rounded-2"
            
            placeholder="Email"
          />
          <br />
          <input
            type="text"
            
            className="form-control border border-dark rounded-2"
           
            placeholder="phone number"
          />{" "}
          <br />
          <input
            type="text"
            
            className="form-control border border-dark rounded-2"
            
            placeholder=" city"
          /><br/>
          <input
            type="text"
            className="form-control border border-dark rounded-2"
            placeholder=" state"
          />
           
          <br />
          {/* <label htmlFor="">what type do you provide in tiffin</label><br /> */}
          {/* <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
    Default checkbox
  </label>
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault1"/>
  <label class="form-check-label" for="flexCheckDefault1">
    Default checkbox
  </label>
</div> */}
          <button type="submit" class="btn btn-danger px-5 d-block m-auto" >
            {" "}
            Submit{" "}
          </button>{" "}
        </form>{" "}
        <br />
        
      </div>{" "}
      
      
    </div>
   
  )
}

export default BecomeToSeller
