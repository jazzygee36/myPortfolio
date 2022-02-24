import React from 'react';
import './Style.css';
import image1 from '../Assets/image1.jpeg';
import image2 from '../Assets/image2.jpeg';
import image3 from '../Assets/image3.jpeg';
import image0 from '../Assets/image0.jpeg';



const Projects=()=>{
    return(
        <div id="projects">
            <div className="container">
                <div className="row section-title justify-content-center text-center">
                    <h1 className="section-title-heading">My Projects</h1>
                    <p>Some of my latest works are shown below</p>
                </div>


                <div className="row">
                    <div className="col-md-12 mt-4">
                        <div className="overlay-image"><a href="http://giantlaneproject.com/">
                        <img className="image" src={image1} alt="Alt text" width="100%"/>
                    
                        </a>
                            
                            
                        </div>
                    </div>

                    <div className="col-md-12 mt-4">
                        <div className="overlay-image"><a href="https://bervidson.com/">
                        <img className="image" src={image2} alt="Alt text" width="100%"/>
                    
                        </a>
                            
                            
                        </div>
                    </div>

                    <div className="col-md-12 mt-4">
                        <div className="overlay-image"><a href="https://fitfixam.com/">
                        <img className="image" src={image3} alt="Alt text" width="100%"/>
                    
                        </a>
                            
                            
                        </div>
                    </div>

                    <div className="col-md-12 mt-4">
                        <div className="overlay-image"><a href="http://valustratplc.com/">
                        <img className="image" src={image0} alt="Alt text" width="100%"/>
                    
                        </a>
                            
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}




export default Projects