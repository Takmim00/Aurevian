import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Projects from '../components/Projects';
import Process from '../components/Process';

const Home = () => {
    return (
        <div>
            <Hero/>
            <Services/>
            <About/>
            <Projects/>
            <Process/>
        </div>
    );
};

export default Home;