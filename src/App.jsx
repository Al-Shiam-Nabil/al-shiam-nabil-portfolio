import { Element } from "react-scroll";
import AboutMe from "./Components/AboutMe/AboutMe";
import Banner from "./Components/Banner/Banner";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Header/Navbar";
import Projects from "./Components/projects/Projects";
import BackToTop from "./Components/Shared/BackToTop";
import TechStack from "./Components/TechStack/TechStack";

function App() {
  return (
    <>
     <Element name="home">
       <div className="bg-base-100 text-accent">
        <BackToTop></BackToTop>
        <header>
          <Navbar></Navbar>
        </header>

        <main>
          <Banner></Banner>
          <AboutMe></AboutMe>
          <TechStack></TechStack>

          <Projects></Projects>
          <Contact></Contact>
        </main>

        <Footer></Footer>
      </div>
     </Element>
    </>
  );
}

export default App;
