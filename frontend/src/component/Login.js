import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import {Link} from 'react-router-dom'


// Custom CSS for additional styling

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const [role,setRole]=useState("customer");
  
  

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      console.log(role,email,password)
   let result = await fetch("http://localhost:8080/api/v1/auth/login",{
    method:'post',
    body:JSON.stringify({role,email,password}),
    headers:{
      'content-Type':'application/json'
    },
  }
   );
   result=await result.json()
   console.log(result);
   if(result.data.role==="seller"){
    window.location.href='/dashboard'
   }else{
    window.location.href='/home'
   }
   if(result.data){
     localStorage.setItem("user", JSON.stringify(result.token));
     localStorage.setItem("data", JSON.stringify(result.data));

   }else{
    alert("please enter valid data")
   }
    } catch (error) {
       console.log(error);
    }
    
  };

  

  return (
    <div className="container-fluid pt-5"
    style={{
      backgroundImage:
        "url('https://images.pexels.com/photos/349610/pexels-photo-349610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        minHeight: '100vh',
      
      backgroundPosition: 'center',
      backgroundSize: "cover"
    }}
    >
      <div className="row justify-content-center " style={{"paddingTop":"10%"}}>
        <div className="col-md-4">
          <div className="card">
            <div className="card-header text-center fs-3">Login</div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
              <div className="d-flex mb-2">
  <div className="form-check">
  <input className="form-check-input text-black" type="radio" name="role" id="radioCustomer" value={"customer"} onChange={(e)=>setRole(e.target.value)} defaultChecked />
  <label className="form-check-label " htmlFor="radioCustomer">
    customer
  </label>
</div>

<div className="form-check ms-2">
  <input className="form-check-input" type="radio" name="role" id="radioSeller" value={"seller"} onChange={(e)=>setRole(e.target.value)} />
  <label className="form-check-label" htmlFor="radioSeller">
    seller
  </label>
</div>
</div>

                <div className="form-group">
                  <label htmlFor="username">Email:</label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    value={email}
                    
                    onChange={(e)=>setEmail(e.target.value)}
                    
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password:</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    className="form-control"
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary mt-2 d-block m-auto">
                  Login
                </button>
                <p className='pt-2 text-center'>
             Don 't have an account?<Link to="/signup">create account</Link>
           </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

