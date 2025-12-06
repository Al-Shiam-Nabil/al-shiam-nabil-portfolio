import {

  FaLinkedin,

  FaArrowUp,
  FaFacebookSquare,
} from "react-icons/fa";
import Container from "../Shared/Container";
import { FaSquareGithub } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#001931] text-base-100 pt-16 pb-6 mt-24">
      <Container>
        <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 md:gap-20  ">
          {/* Left */}
          <div className="lg:col-span-2">
            <h2 className="text-xl font-bold flex items-center gap-2">
              Al Shiam Nabil
            </h2>
            <p className="text-gray-300 mt-2">
              Crafting modern, responsive, and user-friendly web experiences.
              Focused on building interfaces that feel seamless, fast, and
              intuitive.
            </p>

            <a
              href=""
              className="inline-block bg-secondary text-white font-semibold px-5 py-2  mt-6 hover:opacity-90 transition"
            >
              Get in Touch
            </a>
          </div>

          {/* Menu */}
          <div className="flex flex-col ">
            <h3 className="font-semibold text-white mb-3">Menu</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="hover:underline text-sm transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#work" className="hover:underline text-sm transition">
                  About
                </a>
              </li>
              <li>
                <a href="#about" className="hover:underline text-sm transition">
                  Tech Stack
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="hover:underline text-sm transition"
                >
                  Contact
                </a>
              </li>
            </ul>
              
          </div>

          {/* Socials */}
          <div className="">
            <h3 className="font-semibold text-white mb-3">Socials</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 hover:underline text-sm cursor-pointer transition">
                <a
                  href="https://www.linkedin.com/in/al-shiam-nabil/"
                  target="_blank"
                  className=" flex items-center gap-2"
                >
                  <FaLinkedin className=""></FaLinkedin> Linkedin
                </a>
              </li>
              <li className="flex items-center gap-2 hover:underline text-sm cursor-pointer transition">
                <a
                  href="https://www.facebook.com/al.shiam.nabil"
                  target="_blank"
                  className="flex gap-2 items-center"
                >
                  <FaFacebookSquare></FaFacebookSquare>Facebook
                </a>
              </li>
              <li className="flex items-center gap-2 hover:underline text-sm cursor-pointer transition">
                <a
                  href="https://github.com/Al-Shiam-Nabil"
                  target="_blank"
                  className="flex items-center gap-2"
                >
                  <FaSquareGithub></FaSquareGithub>GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom row */}
        <div className="border-t border-gray-700 mt-10 pt-6  flex flex-col md:flex-row justify-between items-center text-sm text-gray-300">
          <p>© 2025 Al Shiam Nabil</p>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-1 hover:text-cyan-400 transition mt-4 md:mt-0"
          >
            Back to Top <FaArrowUp />
          </button>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
