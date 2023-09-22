import React from "react";
import Cards from "./Cards";
import "./Home.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { FaSearch, FaLocationArrow } from "react-icons/fa";

function Home() {
  return (
    <>
    <Navbar/>
      <div class="wrap ">
        <h1 className="mb-4"> Discover Tiffins in your Area: ) </h1>{" "}
        <div className='search'>
      <FaSearch className='search-icon' size='25px'/>
    <input type="text" placeholder='type to search..' />
    </div>
      </div>
      <div className="container">
        <h1 h1 className="mb-5">
         
          Today 's Pick
        </h1>
        <div className="row gap-0">
          <div className="col mb-5 mt-5 ms-5">
            <Cards
              imgsrc="https://content.jdmagicbox.com/comp/ahmedabad/b4/079pxx79.xx79.200115093511.i8b4/catalogue/mohanjithal-gujarati-thali-chandkheda-ahmedabad-4mq1j4g0al.jpg?clr="
              title="Gujarati Thali"
              text="5 roti+sabji+papad+daal+rice"
              text2="60"
            />
          </div>
          <div className="col mb-5 mt-5 ms-5">
            <Cards
              imgsrc="https://content.jdmagicbox.com/comp/ahmedabad/b4/079pxx79.xx79.200115093511.i8b4/catalogue/mohanjithal-gujarati-thali-chandkheda-ahmedabad-4mq1j4g0al.jpg?clr="
              title="punjabi thali"
              text="5 roti+sabji+papad+daal+rice"
              text2="60"
            />
          </div>
          <div className="col mb-5 mt-5 ms-5">
            <Cards
              imgsrc="https://content.jdmagicbox.com/comp/ahmedabad/b4/079pxx79.xx79.200115093511.i8b4/catalogue/mohanjithal-gujarati-thali-chandkheda-ahmedabad-4mq1j4g0al.jpg?clr="
              title="Kathiyawadi thali  "
              text="5 roti+sabji+papad+daal+rice"
              text2="60"
            />
          </div>
          <div className="col mb-5 mt-5 ms-5">
            <Cards
              imgsrc="https://hungrito.com/wp-content/uploads/2021/07/Rajasthani-food.jpg"
              title="Rajathani Thali  "
              text="5 roti+sabji+papad+daal+rice"
              text2="60"
            />
          </div>
          <div className="col mb-5 mt-5 ms-5">
            <Cards
              imgsrc="https://hungrito.com/wp-content/uploads/2021/07/Rajasthani-food.jpg"
              title="Rajathani Thali  "
              text="5 roti+sabji+papad+daal+rice"
              text2="60"
            />
          </div>
          <div className="col mb-5 mt-5 ms-5">
            <Cards
              imgsrc="https://hungrito.com/wp-content/uploads/2021/07/Rajasthani-food.jpg"
              title="Rajathani Thali  "
              text="5 roti+sabji+papad+daal+rice"
              text2="60"
            />
          </div>
        </div>
      </div>
      <div className="container">
        <h1 className="mb-5 mt-5"> Popular in Your Area </h1>
        <div className="row ">
          <div className="col mb-5 mt-5 ms-5">
            <Cards
              imgsrc="https://content.jdmagicbox.com/comp/ahmedabad/b4/079pxx79.xx79.200115093511.i8b4/catalogue/mohanjithal-gujarati-thali-chandkheda-ahmedabad-4mq1j4g0al.jpg?clr="
              title="Gujarati Thali"
              text="5 roti+sabji+papad+daal+rice"
              text2="60"
            />
          </div>
          <div className="col mb-5 mt-5 ms-5">
            <Cards
              imgsrc="https://content.jdmagicbox.com/comp/ahmedabad/b4/079pxx79.xx79.200115093511.i8b4/catalogue/mohanjithal-gujarati-thali-chandkheda-ahmedabad-4mq1j4g0al.jpg?clr="
              title="punjabi thali"
              text="5 roti+sabji+papad+daal+rice"
              text2="60"
            />
          </div>
          <div className="col mb-5 mt-5 ms-5">
            <Cards
              imgsrc="https://content.jdmagicbox.com/comp/ahmedabad/b4/079pxx79.xx79.200115093511.i8b4/catalogue/mohanjithal-gujarati-thali-chandkheda-ahmedabad-4mq1j4g0al.jpg?clr="
              title="Kathiyawadi thali  "
              text="5 roti+sabji+papad+daal+rice"
              text2="60"
            />
          </div>
          <div className="col mb-5 mt-5 ms-5">
            <Cards
              imgsrc="https://hungrito.com/wp-content/uploads/2021/07/Rajasthani-food.jpg"
              title="Rajathani Thali  "
              text="5 roti+sabji+papad+daal+rice"
              text2="60"
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
              text="5 roti+sabji+papad+daal+rice"
              text2="60"
            />
          </div>
          <div className="col mb-5 mt-5 ms-5">
            <Cards
              imgsrc="https://content.jdmagicbox.com/comp/ahmedabad/b4/079pxx79.xx79.200115093511.i8b4/catalogue/mohanjithal-gujarati-thali-chandkheda-ahmedabad-4mq1j4g0al.jpg?clr="
              title="punjabi thali"
              text="5 roti+sabji+papad+daal+rice"
              text2="60"
            />
          </div>
          <div className="col mb-5 mt-5 ms-5">
            <Cards
              imgsrc="https://content.jdmagicbox.com/comp/ahmedabad/b4/079pxx79.xx79.200115093511.i8b4/catalogue/mohanjithal-gujarati-thali-chandkheda-ahmedabad-4mq1j4g0al.jpg?clr="
              title="Kathiyawadi thali  "
              text="5 roti+sabji+papad+daal+rice"
              text2="60"
            />
          </div>
          <div className="col mb-5 mt-5 ms-5">
            <Cards
              imgsrc="https://hungrito.com/wp-content/uploads/2021/07/Rajasthani-food.jpg"
              title="Rajathani Thali  "
              text="5 roti+sabji+papad+daal+rice"
              text2="60"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
