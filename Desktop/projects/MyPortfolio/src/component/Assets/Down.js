import React from "react";
import "./Style.css";

const Down = () => {
  return (
    <div id="down">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate fadeinup ftco-animated">
            <div className="block-18">
              <div className="text">
                <strong className="number" data-number="30"></strong>
                <span>JavaScript</span>
              </div>
            </div>
          </div>

          <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate fadeinup ftco-animated">
            <div className="block-18">
              <div className="text">
                <strong className="number" data-number="30"></strong>
                <span>React JS</span>
              </div>
            </div>
          </div>

          <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate fadeinup ftco-animated">
            <div className="block-18">
              <div className="text">
                <strong className="number" data-number="30"></strong>
                <span>Next JS</span>
              </div>
            </div>
          </div>

          <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate fadeinup ftco-animated">
            <div className="block-18">
              <div className="text">
                <strong className="number" data-number="30"></strong>
                <span>Node JS</span>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <h1>I'm Available For Freelancing</h1>
            <div className="down-buttons">
              <a href="#contact" className="btn btn-outline-primary btn-white">
                HIRE ME
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Down;
