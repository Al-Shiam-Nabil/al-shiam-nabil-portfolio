import React, { useEffect, useState } from "react";
import Container from "../Shared/Container";
import MyLink from "./MyLink";
import { CiMenuFries } from "react-icons/ci";
import { Link } from "react-scroll";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleTheme = (checked) => {
    setTheme(checked ? "dark" : "light");
  };

  const navbarLinks = (
    <>
      <MyLink to="home">Home</MyLink>

      <MyLink to="about">About</MyLink>
      <MyLink to="techStack">Tech Stack</MyLink>

      <MyLink to="projects">Projects</MyLink>
      <MyLink to="contact">Contact</MyLink>
    </>
  );

  const themeToggle=<>
    <input
              onChange={(e) => handleTheme(e.target.checked)}
              type="checkbox"
              defaultChecked={localStorage.getItem("theme") === "dark"}
              className="toggle"
            />
  </>

  return (
    <nav className="bg-base-100 py-4 shadow relative z-30">
      <Container className="flex justify-between items-center">
        <Link
          to="home"
          duration={700}
          smooth={true}
          className="text-2xl font-bold  text-primary"
        >
          Al Shiam Nabil
        </Link>

        {/* small device navbar */}

        <div className="lg:hidden">
         <div className="flex items-center gap-10">
           {themeToggle}
          <div>
            <CiMenuFries
              onClick={() => setShowNav(!showNav)}
              className="text-4xl text-primary "
            ></CiMenuFries>

            <div
              className={`absolute ${
                showNav
                  ? "top-full opacity-100"
                  : "top-0 -translate-y-full opacity-0"
              } right-0 duration-700  bg-info-content/50 backdrop-blur-lg w-full sm:w-[250px] p-5`}
            >
              <ul className="flex flex-col gap-5 justify-start items-start">
                {navbarLinks}
              </ul>
            </div>
          </div>
         </div>
        </div>

        {/* large screen navbar */}
        <ul className="hidden lg:flex items-center justify-center gap-5">
          {navbarLinks}
          <li>
        {themeToggle}
          </li>
        </ul>
      </Container>
    </nav>
  );
};

export default Navbar;
