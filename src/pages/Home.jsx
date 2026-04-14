import About from "../components/About";
import Hero from "../components/Hero";
import Process from "../components/Process";
import Projects from "../components/Projects";
import Services from "../components/Services";
import Testimonial from "../components/Testimonial";

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <About />
      <Projects />
      <Process />
      <Testimonial />
    </div>
  );
};

export default Home;
