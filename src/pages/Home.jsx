import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Projects from '../components/Projects';

const Home = () => {
    return (
        <div>
            <Hero/>
            <Services/>
            <About/>
            <Projects/>
        </div>
    );
};

export default Home;