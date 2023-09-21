import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./component/Home";
import About from "./component/About";
import ContactUs from "./component/ContactUs";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Base from "./component/Base";
import BecomeToSeller from "./component/BecomeToSeller";
import MyOrder from "./component/MyOrder";

import Login from "./component/Login";
import SignUp from "./component/SignUp";
import PrivateComponent from "./component/PrivateComponent";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path="/" element={<Base />} />
      <Route element={<PrivateComponent/>}>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />{" "}
        <Route path="/contact" element={<ContactUs />} /> 
        <Route path="/myorder" element={<MyOrder />} />
        </Route>
        <Route path="/seller" element={<BecomeToSeller />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
