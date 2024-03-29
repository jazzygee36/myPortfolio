import React from "react";
import "./Style.css";

const Skills = () => {
  return (
    <div id="skills">
      <div className="container">
        <div className="row section-title justify-content-center text-center">
          <h1 className="section-title-heading">My Skills</h1>
        </div>

        <div className="row">
          <div className="col-md-6">
            <h2 className="head">
              HTML/CSS/Materia UI/Chakra UI/Style Components/Tailwind Css
            </h2>
            <div className="progress">
              <div
                className="role"
                role="progressbar"
                aria-valuenow="95"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: "90%" }}
              >
                90
              </div>
            </div>

            <h2 className="head">React.JS</h2>
            <div className="progress">
              <div
                className="role"
                role="progressbar"
                aria-valuenow="95"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: "80%" }}
              >
                80
              </div>
            </div>

            <h2 className="head">TypeScript</h2>
            <div className="progress">
              <div
                className="role"
                role="progressbar"
                aria-valuenow="95"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: "67%" }}
              >
                67
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <h2 className="head">Javascript </h2>
            <div className="progress">
              <div
                className="role"
                role="progressbar"
                aria-valuenow="95"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: "69%" }}
              >
                69
              </div>
            </div>

            <h2 className="head">Next JS</h2>
            <div className="progress">
              <div
                className="role"
                role="progressbar"
                aria-valuenow="95"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: "75%" }}
              >
                75
              </div>
            </div>

            <h2 className="head">Node Js</h2>
            <div className="progress">
              <div
                className="role"
                role="progressbar"
                aria-valuenow="95"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: "50%" }}
              >
                50
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
