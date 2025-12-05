import AboutMe from "./Components/AboutMe/AboutMe";
import Banner from "./Components/Banner/Banner";
import Navbar from "./Components/Header/Navbar";
import Services from "./Components/MyServices/Services";
import TechStack from "./Components/TechStack/TechStack";

function App() {
  return (
    <>
      <body className="bg-base-100 text-accent">
        <header>
          <Navbar></Navbar>
        </header>

        <main>
          <Banner></Banner>
          <AboutMe></AboutMe>
          <TechStack></TechStack>
          <Services></Services>
        </main>
      </body>
    </>
  );
}

export default App;
