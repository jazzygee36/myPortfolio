import React from 'react';
import './Style.css';


const Service =()=>{
    return(
          <div id="service">
              <div className="container">
                  <div className=" section-title row justify-content-center text-center mt-4">
                      <h1 className="section-title-heading">Service</h1>
                      <p>Below are the services i render</p>
                  </div>
                  <div className="row">
                      <div className="col-md-4">
                          <div className="service-block mt-4">
                              <span className="icon">
                                  <i className="fas fa-crop-alt"></i>
                              </span>
                              <h2>UI/UX <br/>CONSTRUCTOR</h2>
                          </div>
                      </div>
                

                 
                      <div className="col-md-4">
                          <div className="service-block mt-4">
                              <span className="icon">
                                  <i className="fas fa-laptop"></i>
                              </span>
                              <h2>WEBSITE <br/>DEVELOPER</h2>
                          </div>
                      </div>
                  

                
                      <div className="col-md-4">
                          <div className="service-block mt-4">
                              <span className="icon">
                                  <i className="fas fa-mobile-alt"></i>
                              </span>
                              <h2>APPLICATION <br/>DEVELOPER</h2>
                          </div>
                      </div>
                    </div>
                  
              </div>
          </div>
    )
}


export default Service