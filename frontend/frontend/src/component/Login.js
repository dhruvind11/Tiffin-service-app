import React from 'react'
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const collectData=async()=>{
      console.log(email, password);
      let result = await axios.post("http://localhost:5000/login", {
        email,
        password,
      });
      console.log(result);
      if(result.name){
      localStorage.set("user",JSON.stringify(result));
      }else{
        alert("please enter correct details")
      }
     }

  return (
     <div>
    <div className='text-center' style={{
      backgroundImage:
        "url('https://img.freepik.com/free-photo/top-close-up-view-vegetables-tomatoes-with-pedicels-garlic-bell-peppers-lemon-oil-onion_140725-72203.jpg?w=996&t=st=1691146333~exp=1691146933~hmac=3176d0253d772e350b8a066bbfba283d9d200cfb6d573311eadaf4a4dc107815')",
      height: "100vh",
      width: "auto",
      backgroundSize: "cover",
    }}>
      <div>
      
      <Form className='col-sm-4 offset-sm-4 ' style={{paddingTop:"20%"}}><h1>Login Here</h1><input type="email" value={email} className="form-control border border-dark rounded-2" onChange={(e)=>setEmail(e.target.value)} placeholder="Email"/>
        
        <br/>
        
          <input type="password" value={password} className="form-control border border-dark rounded-2" onChange={(e)=>setPassword(e.target.value)} placeholder="password"/><br />
          <button type="button" className="btn btn-danger px-5" onClick={collectData}>Login</button></Form>
      
          <p>Don't have an account?<Link to="/signup">create account</Link></p>
    </div>
    </div>
    </div>
  )
}

export default Login
