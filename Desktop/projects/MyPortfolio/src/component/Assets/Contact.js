import React from "react";
import "./Style.css";

const Contact = () => {
  return (
    <div id="contact">
      <div className="container">
        <div className="row justify-content-center text-center">
          <h1> Contact Me</h1>
          <p>Reach me on the following platforms</p>
        </div>

        <div className="row">
          <div className="col-md-3">
            <span className="icon">
              <i className="fas fa-map-marker-alt"></i>
            </span>
            <h2>ADDRESS</h2>
            <p>Lagos Nigeria</p>
          </div>

          <div className="col-md-3">
            <span className="icon">
              <i className="fas fa-phone"></i>
            </span>
            <h2>CONTACT NUMBER</h2>
            <p>08181256788</p>
          </div>

          <div className="col-md-3">
            <span className="icon">
              <i className="fas fa-envelope"></i>
            </span>
            <h2>EMAIL ADDRESS</h2>
            <p>jazzygee36@gmail.com</p>
          </div>

          <div className="col-md-3">
            <span className="icon">
              <i class="fab fa-linkedin"></i>
            </span>
            <h2>LINKEDIN</h2>
            <p>"https://www.linkedin.com/in/samson-mesioye-54b35a20a/"</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
