import React from "react";
import "./Style.css";

const Footer = () => {
  return (
    <div id="footer">
      <div className="container">
        <div className="row mt-4">
          <div className="col-md-4">
            <h1>About</h1>
            <p>
              Talented in project management, team leadership and independent
              problem solving. Highly organized multitasking with expertise in
              scheduling projects, enhancing designs and verifying code.
            </p>

            <ul className="social  float-md-left float-lft">
              <li>
                <a href="https://www.linkedin.com/in/samson-mesioye-54b35a20a/">
                  <i class="fab fa-linkedin"></i>
                </a>
              </li>
              {/* <li>
                <a href="https://gmail.com">
                  <i class="fas fa-envelope"></i>
                </a>
              </li> */}
              <li>
                <a href="https://twitter.com/SamsonMesi">
                  <i class="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="https://web.facebook.com/profile.php?id=100070569102619">
                  <i class="fab fa-facebook"></i>
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-4">
            <h1>Servives</h1>
            <ul>
              <li>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a>
                  <span>
                    <i class="fas fa-long-arrow-alt-right"></i>
                  </span>
                  Web Development
                </a>
              </li>
              <li>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a>
                  <span>
                    <i class="fas fa-long-arrow-alt-right"></i>
                  </span>
                  App Development
                </a>
              </li>
              <li>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a>
                  <span>
                    <i class="fas fa-long-arrow-alt-right"></i>
                  </span>
                  Ui/Ux
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-4">
            <h1>Have a Question ?</h1>
            <ul>
              <li>
                <span>
                  <i className="fas fa-map-marker-alt"></i>
                </span>
                Lagos Nigeria
              </li>

              <li>
                <span>
                  <i className="fas fa-phone"></i>
                </span>
                08181256788
              </li>

              <li>
                <span>
                  <i className="fas fa-envelope"></i>
                </span>
                jazzygee36@gmail.com
              </li>
            </ul>
          </div>
          <div className="col-md-12">
            <div className="copyright">
              <h2>copyright ©2021 All rights reserved|Mesioye Samson</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
