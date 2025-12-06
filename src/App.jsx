import AboutMe from "./Components/AboutMe/AboutMe";
import Banner from "./Components/Banner/Banner";
import Contact from "./Components/Contact/Contact";
import Navbar from "./Components/Header/Navbar";
import Projects from "./Components/projects/Projects";
import TechStack from "./Components/TechStack/TechStack";

function App() {
  return (
    <>
      <div className="bg-base-100 text-accent">
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
      </div>
    </>
  );
}

export default App;
