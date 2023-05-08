import React from "react";
import "./Style.css";

const Banner = () => {
  return (
    <div id="banner">
      <div className="container">
        <div className="row main-banner-content justify-content-center text-center">
          <div className="col-md-6">
            <h1>
              I'm MESIOYE SAMSON{" "}
              <span className="p">
                <br /> a Full Stack Developer based in Lagos
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
