import React from "react";
import Container from "../Shared/Container";
import profilePhoto from "../../assets/nabilProfile.png";

const Banner = () => {
  return (
    <Container>
      <section className="flex flex-col lg:flex-row justify-center items-center gap-12 lg:gap-20 my-24">
        {/* left */}
        <div className="w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] shrink-0">
          <img
            src={profilePhoto}
            alt="Al Shiam Nabil Photo"
            className="rounded-full w-full h-full shadow-xl object-cover"
          />
        </div>

        {/* right */}
        <div className="flex flex-col justify-center lg:justify-start lg:items-start items-center max-w-[650px] lg:max-w-[570px] mx-auto lg:mx-0 space-y-2 text-center lg:text-left">
          <h2 className="text-lg sm:text-xl font-semibold">Frontend Web Developer</h2>
          <h1 className="text-4xl sm:text-5xl font-bold">Al Shiam Nabil</h1>
          <p className="text-base-200 my-2">
            I’m a frontend developer skilled in building clean, responsive, and
            user friendly websites using HTML, CSS, Tailwind, JavaScript, React,
            Node.js, Express, and MongoDB.{" "}
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-5 mt-2">
            <button className="relative w-[200px] inline-flex items-center justify-center px-4 py-2.5 overflow-hidden tracking-tighter text-white bg-accent  group cursor-pointer">
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-primary rounded-full group-hover:w-56 group-hover:h-56"></span>

              <span className="relative text-base font-semibold ">
                Download Resume
              </span>
            </button>

            <button className="relative w-[200px] inline-flex items-center justify-center px-4 py-2.5 overflow-hidden tracking-tighter text-white bg-accent  group cursor-pointer">
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-primary rounded-full group-hover:w-56 group-hover:h-56"></span>

              <span className="relative text-base  font-semibold">Github</span>
            </button>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Banner;
