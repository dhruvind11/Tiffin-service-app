import React, { useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { useState } from 'react';
// import { FaGoogle } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

import { Button } from 'react-bootstrap';

function SignUp() {
  
  const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const[ConfirmPassword,setConfirmPassword]=useState("");
    const navigate=useNavigate();
    const collectData=async()=>{
      console.log(name, email, password,ConfirmPassword);
    let result = await fetch("http://localhost:5000/register",{
      method:'post',
      body:JSON.stringify({name,email,password,ConfirmPassword}),
      headers:{
        'content-Type':'application/json'
      },
    }
     );
     result=await result.json()
     console.log(result);
     if(result){
       navigate('/home');
     }
     localStorage.setItem("user", JSON.stringify(result));
   }
   
  return (
    <>
      <div >
      <div className="text-center " style={{
  backgroundImage:
    "url('https://as2.ftcdn.net/v2/jpg/03/78/97/59/1000_F_378975954_G39M4ptXAjxKy80gbBIEo0wqBkk89gBF.jpg')",
  height: "100vh",
  width: "auto",
  backgroundSize: "cover",
}}>
      
      <br />
      <div style={{marginTop:"5%"}}>
      
        <Form
          className="col-sm-4 offset-sm-2"
          onSubmit={(e) => e.target.preventDefault}>
            <h1> Register Here </h1>
          <input
            type="text"
            className="form-control border border-dark rounded-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full name"
          />
          <br />
          <input
            type="email"
            value={email}
            className="form-control border border-dark rounded-2"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <br />
          <input
            type="password"
            value={password}
            className="form-control border border-dark rounded-2"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
          />{" "}
          <br />
          <input
            type="password"
            value={ConfirmPassword}
            className="form-control border border-dark rounded-2"
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder=" confirm password"
          />{" "}
          <br />
          <button type="button" className="btn btn-danger px-5" onClick={collectData}>
            
            Sign Up
          </button>
        </Form>
        
        
      </div>
      
      <div className="d-grid gap-2 col-sm-4 offset-sm-2">
      <h5> OR </h5>
        <Button variant="primary">
          <i className="fa-brands fa-google"> </i>&nbsp; SIGN UP WITH GOOGLE
        </Button>
        <Button variant="secondary">
          <i className="fa-brands fa-facebook"> </i>&nbsp; SIGN UP WITH FACEBOOK
        </Button>
        <p className="text-bold"> forgot password </p>{" "}
        <p className=""> Already have an account ?<Link to="/login">Login!</Link>  </p>
      </div>
    </div>
      </div>
    </>
  );
}

export default SignUp;