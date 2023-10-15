import React from "react";
import "./Style.css";

const Banner = () => {
  return (
    <div id="banner">
      <div className="container">
        <div className="row main-banner-content justify-content-center text-center">
          <div className="col-lg-9">
            <h1>
              MESIOYE SAMSON{" "}
              <span className="p">
                <br /> Web and Mobile App Developer | React JS | React Native |
                Next JS | Node JS | HTML5 | CSS3 | JavaScript | MongoDB | Git |
                API Testing | experience in delivering high-performance Web &
                Mobile applications.
              </span>
            </h1>

            <div className="banner-buttons">
              <a
                href="#contact"
                className="btn btn-outline-primary btn-white me-4"
              >
                HIRE ME
              </a>
              <a href="#projects" className="btn btn-outline-primary btn-white">
                MY WORKS
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
