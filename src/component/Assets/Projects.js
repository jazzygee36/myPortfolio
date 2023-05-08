import React from "react";
import "./Style.css";

const Projects = () => {
  return (
    <div id="projects">
      <div className="container">
        <div className="row section-title justify-content-center text-center">
          <h1 className="section-title-heading">My Projects</h1>
          <p>Latest projects only</p>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12 row">
              <div className="col-lg-3 col-md-6 col-sm-12">
                <a href="https://hstage.plaqad.com/">plaqad</a>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <a href="https://fuddle.ai/">Fuddle</a>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <a href="https://min.ng/">Min</a>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                {" "}
                <a href="http://bedge.com/">Bedge</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
