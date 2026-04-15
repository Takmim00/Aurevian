import FAQ from "../components/FAQ";
import About from "../components/About";
import Hero from "../components/Hero";
import Process from "../components/Process";
import Projects from "../components/Projects";
import Services from "../components/Services";
import Testimonial from "../components/Testimonial";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <About />
      <Projects />
      <Process />
      <Testimonial />
      <FAQ/>
      <ContactSection/>
      <Footer/>
    </div>
  );
};

export default Home;
