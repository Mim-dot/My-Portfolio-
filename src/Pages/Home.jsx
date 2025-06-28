import React from 'react';
import Banner from './Banner';
import About from './About';
import Skills from './Skills';
import Contact from './Contact';
import Education from './Education';
import Projects from './Projects';


const Home = () => {
    return (
        <>
        <Banner/>
        <About/>
        <Skills/>
        <Education/>
          <Projects/>
        <Contact/>
    
        </>
    );
};

export default Home;