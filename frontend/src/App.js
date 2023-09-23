import "./App.css";
import { BrowserRouter, Route, Routes,Redirect } from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
import ContactUs from "./component/ContactUs";

import Base from "./component/Base";
import Orders from "./sellercomponent/Orders"
import MyOrder from "./component/MyOrder";
import MenuManagement from "./sellercomponent/MenuManagement"
import Dashboard from "./sellercomponent/Dashboard"
import Login from "./component/Login";
import SignUp from "./component/SignUp";
import PrivateComponent from "./component/PrivateComponent";
import Profile from "./sellercomponent/Profile"


function App() {
  const data=JSON.parse(localStorage.getItem("data"));
  
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Base />} />
    <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      {data && data.role==='customer' &&
      <>
      <Route element={<PrivateComponent/>}>
         
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />{" "}
        <Route path="/contact" element={<ContactUs />} /> 
        <Route path="/myorder" element={<MyOrder />} />
       
        </Route>
      </> }
      {   data && data.role==='seller' &&   <>
       <Route path="/dashboard" element={<Dashboard />} />
           <Route path="/menu" element={<MenuManagement />} />
           <Route path="/orders" element={<Orders />} />
           <Route path="/profile" element={<Profile />} />
</>}
      
      
      </Routes></BrowserRouter>

  )}
export default App;
