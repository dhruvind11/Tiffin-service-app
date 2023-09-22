import React from "react";
import "./Contact.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
function ContactUs() {
  return (
  <>  <Navbar/><div class="custom-bg-color-1 py-5" id="contact_us">
  <div class="container">
    <p
      class="text-secondary fs-2 fw-bold text-uppercase text-center "
      style={{ marginTop: "50px" }}
    >
      {" "}
      contact us{" "}
    </p>{" "}
    <p class=" text-secondary text-center">
      {" "}
      Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed.{" "}
    </p>{" "}
    <form>
      <div class="row mt-4">
        <div class="col-6">
          <input
            type="text"
            class="form-control border-secondary"
            id="exampleFormControlInput1"
            placeholder="Name"
          />
        </div>{" "}
        <div class="col-6">
          <input
            type="email"
            class="form-control border-secondary"
            id="exampleFormControlInput1"
            placeholder="Email"
          />
        </div>{" "}
      </div>{" "}
      <div class="form-group mt-4">
        <textarea
          class="form-control  custom-resize border-secondary"
          id="exampleFormControlTextarea1"
          rows="8"
          placeholder="message"
        >
          {" "}
        </textarea>{" "}
      </div>{" "}
      <div class="d-flex justify-content-center mt-3">
        <button type="button" class="btn btn-primary btn-lg">
          {" "}
          SEND MESSAGE{" "}
        </button>{" "}
      </div>{" "}
    </form>{" "}
  </div>{" "}
</div><Footer/></>
  );
}

export default ContactUs;
