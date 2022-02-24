import React from "react";
import "./Style.css";
import pic1 from "../Assets/headshot.jpg";

const Tag = () => {
  return (
    <div className="tag">
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-6">
            <div className="tag-form">
              <form action="# mt-4">
                <div className="row">
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your name"
                    />
                  </div>
                </div>
                <div className="col mt-4">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your email"
                  />
                </div>

                <div className="col mt-4">
                  <input
                    type="subject"
                    className="form-control"
                    placeholder="Subject"
                  />
                </div>

                <div className="form-group mt-4">
                  <textarea
                    className="form-control"
                    rows="10"
                    placeholder="Enter your message"
                  ></textarea>
                </div>
                <button type="submit" className="btn-contact mt-4">
                  Send Message
                </button>
              </form>
            </div>
          </div>

          <div className="col-md-6 sm-4">
            <div className="photo-box">
              <img src={pic1} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tag;
