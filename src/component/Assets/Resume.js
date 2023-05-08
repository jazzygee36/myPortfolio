import React from "react";
import "./Style.css";

const Resume = () => {
  return (
    <div id="resume">
      <div className="container">
        <div className="row section-title justify-content-center text-center mt-4">
          <h1 className="section-title-heading">Resume</h1>
          <p>
            Keen to apply deep technical knowledge and creative design sense to
            amplifying online traffic. Combines sound technical frameworks with
            appealing media assets to generate front end solutions that expand
            user bases.
          </p>
        </div>

        <div className="row mt-4">
          <div className="col-md-6">
            <div className="resume-block mt-4">
              <h2>2020-2020</h2>
              <h3>Frontend Developer</h3>
              {/* <h4>Bedge Concept</h4> */}
              <p>
                Designs and develops scalable, reusable, secure and innovative
                solutions for Web sites and applications.
              </p>
            </div>

            <div className="resume-block mt-4">
              <h2>2021-2022</h2>
              <h3>Mid Software Developer</h3>
              {/* <h4>Plaqad</h4> */}
              <p>
                Designed layouts on the web pages responsive for smart phones,
                tablets and Personal desktops.
              </p>
            </div>
          </div>

          <div className="col-md-6">
            <div className="resume-block mt-4">
              <h2>2021-2021</h2>
              <h3>Backend Engineering </h3>
              {/* <h4>MIN</h4> */}
              <p>
                focusing on databases, back-end logic, application programming
                interface (APIs), architecture, and servers.
              </p>
            </div>

            <div className="resume-block mt-4">
              <h2>2020-2020</h2>
              <h3>Freelance Frontend Developer</h3>
              {/* <h4>Aggital Works</h4> */}
              <p>
                Reviewed project's to follow better convention and pattern
                using: REACT.JS
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
