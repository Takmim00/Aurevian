import AIFeatures from "../components/AIFeatures";
import About from "../components/About";
import ContactSection from "../components/ContactSection";
import FAQ from "../components/FAQ";
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
      <AIFeatures/>
      <About />
      <Projects />
      <Process />
      <Testimonial />
      {/* <FAQ /> */}
      <ContactSection />
    </div>
  );
};

export default Home;
