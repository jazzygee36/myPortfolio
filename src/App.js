import React from 'react';
import './App.css';
import Header from './component/Assets/Header.js';
import Banner from './component/Assets/Banner.js';
import About from './component/Assets/About.js';
import Resume from './component/Assets/Resume.js';
import Service from './component/Assets/Service.js';
import Skills from './component/Assets/Skills.js';
import Projects from './component/Assets/Projects.js';
import Down from './component/Assets/Down.js';
import Contact from './component/Assets/Contact.js';
import Tag from './component/Assets/Tag.js';
import Footer from './component/Assets/Footer.js';

function App() {
  return (
    <div className="App">
       <Header/>
       <Banner/>
       <About/>
       <Resume/>
       <Service/>
       <Skills/>
       <Projects/>
       <Down/>
       <Contact/>
       <Tag/>
       <Footer/>
    </div>
  );
}

export default App;
