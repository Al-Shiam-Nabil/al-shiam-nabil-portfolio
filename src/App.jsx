import AboutMe from "./Components/AboutMe/AboutMe"
import Banner from "./Components/Banner/Banner"
import Navbar from "./Components/Header/Navbar"



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
      </main>
    </body>
    
    </>
  )
}

export default App
