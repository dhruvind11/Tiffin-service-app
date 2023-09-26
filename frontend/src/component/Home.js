import React, { useState, useEffect } from "react";
import Cards from "./Cards";
import "./Home.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { FaSearch, FaLocationArrow } from "react-icons/fa";
import axios from 'axios'
import {Link} from 'react-router-dom'
import MenuItemDetail from "./MenuItemDetails";

function Home() {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    // Make a GET request to fetch menu items when the component mounts
    axios.get('http://localhost:8080/api/v1/menu/get-menu-item') // Replace with the actual API endpoint
      .then(response => {
        setMenuItems(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error fetching menu items:', error);
      });
  }, []);

  return (
    <>
      <Navbar />
      <div class="wrap ">
        <h1 className="mb-4"> Discover Tiffins in your Area: ) </h1>{" "}
        <div className='search'>
<<<<<<< HEAD
      <FaSearch className='search-icon' size='25px'/>
    <input type="description" placeholder='type to search..' />
    </div>
=======
          <FaSearch className='search-icon' size='25px' />
          <input type="text" placeholder='type to search..' />
        </div>
>>>>>>> 567ca95962c4dec945efa3746a3c4413ae43047b
      </div>
      <div className="container">
        <h1 h1 className="mb-5">

          Today 's Pick
        </h1>
<<<<<<< HEAD
        <div className="row gap-0  ">
        {menuItems.map(item => (
            <div className="col mb-5 mt-5 ms-5 " key={item._id}>
              <Link to={`/menu/${item._id}`} className="card-link">
                <Cards
                  imgsrc={`/images/${item.image}`}
                  title={item.name}
                  description={item.description}
                  price={item.price}
                  sellerName={item.sellerData.name}
                />
              </Link>
=======
        <div className="row gap-0">
          {menuItems.map(item => (
            <div className="col mb-5 mt-5 ms-5" key={item._id}>
              <Cards
                imgsrc={`/images/${item.image}`}
                title={item.name}
                text={item.description}
                text2={item.price}
              />
>>>>>>> 567ca95962c4dec945efa3746a3c4413ae43047b
            </div>
          ))}


        </div>
      </div>
      <div className="container">
        <h1 className="mb-5 mt-5"> Popular in Your Area </h1>
        <div className="row ">
          <div className="col mb-5 mt-5 ms-5">
            <Cards
              imgsrc="https://content.jdmagicbox.com/comp/ahmedabad/b4/079pxx79.xx79.200115093511.i8b4/catalogue/mohanjithal-gujarati-thali-chandkheda-ahmedabad-4mq1j4g0al.jpg?clr="
              title="Gujarati Thali"
              description="5 roti+sabji+papad+daal+rice"
              price="60"
            />
          </div>
          <div className="col mb-5 mt-5 ms-5">
            <Cards
              imgsrc="https://content.jdmagicbox.com/comp/ahmedabad/b4/079pxx79.xx79.200115093511.i8b4/catalogue/mohanjithal-gujarati-thali-chandkheda-ahmedabad-4mq1j4g0al.jpg?clr="
              title="punjabi thali"
              description="5 roti+sabji+papad+daal+rice"
              price="60"
            />
          </div>
          <div className="col mb-5 mt-5 ms-5">
            <Cards
              imgsrc="https://content.jdmagicbox.com/comp/ahmedabad/b4/079pxx79.xx79.200115093511.i8b4/catalogue/mohanjithal-gujarati-thali-chandkheda-ahmedabad-4mq1j4g0al.jpg?clr="
              title="Kathiyawadi thali  "
              description="5 roti+sabji+papad+daal+rice"
              price="60"
            />
          </div>
          <div className="col mb-5 mt-5 ms-5">
            <Cards
              imgsrc="https://hungrito.com/wp-content/uploads/2021/07/Rajasthani-food.jpg"
              title="Rajathani Thali  "
              description="5 roti+sabji+papad+daal+rice"
              price="60"
            />
          </div>
        </div>
      </div>
      <div className="container">
        <h1 className="mb-5 mt-5"> Try Something New </h1>
        <div className="row ">
          <div className="col mb-5 mt-5 ms-5">
            <Cards
              imgsrc="https://content.jdmagicbox.com/comp/ahmedabad/b4/079pxx79.xx79.200115093511.i8b4/catalogue/mohanjithal-gujarati-thali-chandkheda-ahmedabad-4mq1j4g0al.jpg?clr="
              title="Gujarati Thali"
              description="5 roti+sabji+papad+daal+rice"
              price="60"
            />
          </div>
          <div className="col mb-5 mt-5 ms-5">
            <Cards
              imgsrc="https://content.jdmagicbox.com/comp/ahmedabad/b4/079pxx79.xx79.200115093511.i8b4/catalogue/mohanjithal-gujarati-thali-chandkheda-ahmedabad-4mq1j4g0al.jpg?clr="
              title="punjabi thali"
              description="5 roti+sabji+papad+daal+rice"
              price="60"
            />
          </div>
          <div className="col mb-5 mt-5 ms-5">
            <Cards
              imgsrc="https://content.jdmagicbox.com/comp/ahmedabad/b4/079pxx79.xx79.200115093511.i8b4/catalogue/mohanjithal-gujarati-thali-chandkheda-ahmedabad-4mq1j4g0al.jpg?clr="
              title="Kathiyawadi thali  "
              description="5 roti+sabji+papad+daal+rice"
              price="60"
            />
          </div>
          <div className="col mb-5 mt-5 ms-5">
            <Cards
              imgsrc="https://hungrito.com/wp-content/uploads/2021/07/Rajasthani-food.jpg"
              title="Rajathani Thali  "
              description="5 roti+sabji+papad+daal+rice"
              price="60"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
