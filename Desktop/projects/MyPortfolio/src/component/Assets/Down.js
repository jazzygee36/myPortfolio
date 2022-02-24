import React from 'react';
import './Style.css';



const Down=()=>{
    return(
        <div id="down">
            <div className="container">
                <div className="row justify-content-center text-center">
                  <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate fadeinup ftco-animated">
                     <div className="block-18">
                         <div className="text">
                             <strong className="number" data-number="30">3</strong>
                             <span>Awards</span>
                         </div>
                     </div>
                  </div>

                  <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate fadeinup ftco-animated">
                     <div className="block-18">
                         <div className="text">
                             <strong className="number" data-number="30">35</strong>
                             <span>Completed Projects</span>
                         </div>
                     </div>
                  </div>


                  <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate fadeinup ftco-animated">
                     <div className="block-18">
                         <div className="text">
                             <strong className="number" data-number="30">15</strong>
                             <span>Happy Customers</span>
                         </div>
                     </div>
                  </div>

                  <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate fadeinup ftco-animated">
                     <div className="block-18">
                         <div className="text">
                             <strong className="number" data-number="30">100</strong>
                             <span>Cups of coffee</span>
                         </div>
                     </div>
                  </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <h1>I'm Available For Freelancing</h1>
                        <div className="down-buttons">
                        <a href="#contact" className="btn btn-outline-primary btn-white">HIRE ME</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default Down 