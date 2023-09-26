// import React, { useEffect } from 'react';
// import Form from 'react-bootstrap/Form';
// 
// import { useState } from 'react';
// // import { FaGoogle } from "react-icons/fa";
// import axios from "axios";
// import { useNavigate } from 'react-router-dom';

// import { Button } from 'react-bootstrap';

// function SignUp() {
  
//   const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const[confirmPassword,setConfirmPassword]=useState("");
//     const navigate=useNavigate();
//     const collectData=async()=>{
//       console.log(name, email, password,confirmPassword);
  //   let result = await fetch("http://localhost:8080/api/v1/auth/register",{
  //     method:'post',
  //     body:JSON.stringify({name,email,password,confirmPassword}),
  //     headers:{
  //       'content-Type':'application/json'
  //     },
  //   }
  //    );
  //    result=await result.json()
  //    console.log(result);
  //    if(result){
  //      navigate('/login');
  //    }
  //   //  localStorage.setItem("user", JSON.stringify(result));
  //  }
   
//   return (
//     <>
//       <div >
//       <div className="text-center " style={{
//   backgroundImage:
//     "url('https://as2.ftcdn.net/v2/jpg/03/78/97/59/1000_F_378975954_G39M4ptXAjxKy80gbBIEo0wqBkk89gBF.jpg')",
//   height: "100vh",
//   width: "auto",
//   backgroundSize: "cover",
// }}>
      
//       <br />
//       <div style={{marginTop:"5%"}}>
      
//         <Form
//           className="col-sm-4 offset-sm-2"
//           onSubmit={(e) => e.target.preventDefault}>
//             <h1> Register Here </h1>
//           <input
//             type="text"
//             className="form-control border border-dark rounded-2"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             placeholder="Full name"
//             required
//           />
//           <br />
//           <input
//             type="email"
//             value={email}
//            
//             onChange={(e) => setEmail(e.target.value)}
//className="form-control border border-dark rounded-2"
//             placeholder="Email"
//             required
//           />
//           <br />
//           <input
//             type="password"
//             value={password}
//             className="form-control border border-dark rounded-2"
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder="password"
//             required
//           />{" "}
//           <br />
//           <input
//             type="password"
//             value={confirmPassword}
//             className="form-control border border-dark rounded-2"
//             onChange={(e) => setConfirmPassword(e.target.value)}
//             placeholder=" confirm password"
//           />{" "}
//           <br />
//           <button type="button" className="btn btn-danger px-5" onClick={collectData}>
            
//             Sign Up
//           </button>
//         </Form>
        
        
//       </div>
      
//       <div className="d-grid gap-2 col-sm-4 offset-sm-2">
//       <h5> OR </h5>
//         <Button variant="primary">
//           <i className="fa-brands fa-google"> </i>&nbsp; SIGN UP WITH GOOGLE
//         </Button>
//         <Button variant="secondary">
//           <i className="fa-brands fa-facebook"> </i>&nbsp; SIGN UP WITH FACEBOOK
//         </Button>
//         <p className="text-bold"> forgot password </p>{" "}
//         <p className=""> Already have an account ?<Link to="/login">Login!</Link>  </p>
//       </div>
//     </div>
//       </div>
//     </>
//   );
// }

// export default SignUp;


import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
// import './Signup.css'; // Custom CSS for additional styling
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const [role,setRole]=useState("customer")
  const [name, setName] = useState("");
  const [sellerName, setSellerName] = useState("");
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
     const[confirmPassword,setConfirmPassword]=useState("");
     const [phoneNumber, setPhoneNumber] = useState(""); // New phone number state
      const [address, setAddress] = useState(""); 
     const navigate=useNavigate();

  const handleSubmit =async (e) => {
    e.preventDefault();
    try {
      console.log(role,name,sellerName,email,password,confirmPassword,phoneNumber,address)
   let result = await fetch("http://localhost:8080/api/v1/auth/register",{
    method:'post',
    body:JSON.stringify({role,name,sellerName,email,password,confirmPassword,phoneNumber,address}),
    headers:{
      'content-Type':'application/json'
    },
  }
   );
   result=await result.json()
   console.log(result);
   if(result){
     navigate('/login');
   }
    } catch (error) {
       console.log(error);
    }
   
  
 }
  
 
  return (
    <div className="container-fluid"
    style={{
      backgroundImage:
        "url('https://img.freepik.com/free-vector/fruit-vegetables-background_23-2148497857.jpg?w=740&t=st=1695718195~exp=1695718795~hmac=ce28be1ae27a88287e3c0ffa1b6a25dc025f082fafc294e070cf911b56aac35f')",
        minHeight: '100vh',
      backgroundPosition: 'center',
      backgroundSize: "cover"
    }}
    >
      <div className="scona row justify-content-center">
        <div className="col-md-5 signform">
          <div className="card">
            <div className="card-header text-center fs-4">Sign Up</div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>

              <div className="d-flex mb-2">
  <div className="form-check">
  <input className="form-check-input" type="radio" name="role" id="radioCustomer" value={"customer"} onChange={(e)=>setRole(e.target.value)} defaultChecked />
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
{
  (role==='customer')&&(
    <div className="form-group">
    <label htmlFor="name">name:</label>
    <input
      type="text"
      id="name"
      name="name"
      value={name}
    onChange={(e) => setName(e.target.value)}
    
      className="form-control"
      required
    />
  </div>
  )
}
           {
            (role==='seller')&&(
<div className="form-group">
                  <label htmlFor="name">sellerName:</label>
                  <input
                    type="text"
                    id="sellerName"
                    name="sellerName"
                    value={sellerName}
                  onChange={(e) => setSellerName(e.target.value)}
                  
                    className="form-control"
                    required
                  />
                </div>
            )
           }     
                
                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
         onChange={(e) => setEmail(e.target.value)}
         
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
                    onChange={(e) => setPassword(e.target.value)}
                    
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="confirmPassword">Confirm Password:</label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                 
                    className="form-control"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phoneNumber">Phone Number:</label>
                  <input
                    type="number"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="address">Address:</label>
                  <textarea
                    id="address"
                    name="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="form-control"
                    rows="2"
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary mt-2 d-block m-auto"> 
                  Sign Up
                </button>
                <p className="pt-2 text-center"> Already have an account ?<Link to="/login">Login!</Link>  </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
