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
                <a href="https://sendbuddie-web.vercel.app//">Sendbuddie App</a>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <a href="https://hstage.plaqad.com/">Plaqad</a>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <a href="https://luminaryexchange.netlify.app/">
                  luminaryexchange
                </a>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                {" "}
                <a href="https://journalistdev.plaqad.com/login">
                  journalist App
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
