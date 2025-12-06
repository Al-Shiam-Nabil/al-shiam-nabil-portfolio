import React, { useState } from "react";
import Container from "../Shared/Container";
import MyLink from "./MyLink";
import { CiMenuFries } from "react-icons/ci";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  const navbarLinks=<>
        <MyLink to="home">Home</MyLink>

                <MyLink to="about">About</MyLink>
                <MyLink to="techStack">Tech Stack</MyLink>
           
                <MyLink to="projects">Projects</MyLink>
                <MyLink to="contact">Contact</MyLink>
  </>

  return (
    <nav className="bg-base-100 py-5 shadow relative z-30">
      <Container className="flex justify-between items-center">
        <h2 className="text-2xl font-bold  text-primary">Al Shiam Nabil</h2>

        <div className="lg:hidden">
          <div >
            <CiMenuFries
              onClick={() => setShowNav(!showNav)}
              className="text-4xl text-primary "
            ></CiMenuFries>

            <div
              className={`absolute ${
                showNav ? 'top-full opacity-100' : "top-0 -translate-y-full opacity-0" 
              } right-0 duration-700  bg-primary/50 backdrop-blur-lg w-full sm:w-[250px] p-5`}
            >
              <ul className="flex flex-col gap-5 justify-start items-start">
          {navbarLinks}
              </ul>
            </div>
          </div>
        </div>

        {/* large screen navbar */}
        <ul className="hidden lg:flex items-center justify-center gap-5">
       {navbarLinks}
          <li>Dark</li>
        </ul>
      </Container>
    </nav>
  );
};

export default Navbar;
