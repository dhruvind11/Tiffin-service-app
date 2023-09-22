import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import Button from 'react-bootstrap/Button';
import { useState,useEffect } from 'react';
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';




function Navbar() {
	const navigate = useNavigate();
	const auth=localStorage.getItem('user');
	const logout = () => {
		localStorage.clear();
		navigate("/login");
	  };
	const navRef = useRef();
	// const navigate = useNavigate();
	
	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};
  
 
    

    // useEffect(() => {
    //   const auth = localStorage.getItem("user");
    //   if(auth){
	// 	navigate("/home")
	//   }
    // });

    
   
  
	return (
		<header className="fixed-top">
      <div><Link to="/"className="logo fs-5">Taste Treasure</Link></div>
			<div>

      <nav ref={navRef}>
      <Link to="/home">Home</Link>
		<Link to="/about">About</Link>
				<Link to="/contact">Contact Us</Link>
				<Link to="/seller">Become to seller</Link>
				<Link to="/myorder">My order</Link>
				{auth?<Link to="/logout"onClick={logout} to="/login">Logout</Link>:<Link to="/login">Login</Link>
}
				
				



                
				
        
		
		{/* <Button variant="danger">Add to Cart</Button> */}
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
      </div>
			
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>



    
	);
}

export default Navbar;