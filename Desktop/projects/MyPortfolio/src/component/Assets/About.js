import React from "react";
import "./Style.css";
import Headshot from "../Assets/headshot.jpg";
import MESIOYESAMSONCV from "../Assets/MESIOYESAMSONCV.pdf";

const About = () => {
  return (
    <div id="about">
      <div className="container">
        <div className="row main-about-content">
          <div className="col-md-6">
            <h1>About Me</h1>
            <p>
              Self-motivated Web and App Developer with years of experience
              working on multiple projects. Passionate and hardworking with a
              penchant for meeting deadlines. Interested in roles indulging best
              practices and offering diverse customer projects.
            </p>
            <ul className="about-info px-md-0 px-2">
              <li className="d-flex">
                <span>
                  <b>Name:</b> Mesioye Samson
                </span>
              </li>

              <li className="d-flex">
                <span>
                  <b>Address:</b> 5, Tunde Abimbola Street, Magodo phase II,
                  Magodo-Lagos.
                </span>
              </li>
              <li className="d-flex">
                <span>
                  <b>Email:</b> jazzygee36@gmail.com{" "}
                </span>
              </li>
              <li className="d-flex">
                <span>
                  <b>Phone:</b> <span className="num"> 08181256788</span>
                </span>
              </li>
              <li className="d-flex">
                <span>
                  <b>Whatsapp-Phone:</b>{" "}
                  <span className="num"> 08136668316</span>
                </span>
              </li>
            </ul>

            <div className="about-button">
              <a
                href={MESIOYESAMSONCV}
                className="btn-outline-primary btn-white"
              >
                DOWNLOAD CV
              </a>
            </div>
          </div>

          <div className="col-md-6 sm-4">
            <div className="image-box">
              <img src={Headshot} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
