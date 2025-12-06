import React from "react";
import Container from "../Shared/Container";
import Heading from "../Shared/Heading";
import {
  FaGraduationCap,
  FaLaptopCode,
  FaQuestionCircle,
  FaUser,
} from "react-icons/fa";
import { Element } from "react-scroll";

const AboutMe = () => {
  return (
    <Element name="about">
    <Container className="my-24">
      <Heading>About Me</Heading>

      <div className="space-y-2 p-5 sm:p-8 mb-5 bg-white rounded-xl">
        <h3 className="text-xl font-semibold text-primary flex items-center gap-3">
          <FaUser className="text-2xl" />
          My Passion
        </h3>
        <p>
          I’m a frontend developer who started with small steps and kept
          learning consistently. Over time, I’ve worked on multiple real
          projects, improving my skills and building clean, responsive, and
          user-friendly web experiences. I’m continuously learning and growing
          to become better every day.
        </p>
      </div>

      <div className="grid xl:grid-cols-3 gap-5">
        <div className="space-y-2  p-5 sm:p-8 rounded-xl bg-white">
          <h3 className="text-xl font-semibold flex items-center gap-3 text-primary">
            <FaGraduationCap className="text-4xl"></FaGraduationCap> Education
          </h3>
          <div>
            <h3 className="font-bold">
              Bsc in Computer Science And Engineering
            </h3>
            <p>Daffodil International University</p>
          </div>

          <div>
            <h3 className="font-bold">Higher Secondary School Certificate</h3>
            <p>Govt. Shah Sultan College, Bogura</p>
          </div>

          <div>
            <h3 className="font-bold">Secondary School Certificate</h3>
            <p>Bogura zilla School</p>
          </div>
        </div>

        <div className="space-y-2 bg-white rounded-xl p-5 sm:p-8 ">
          <h3 className="text-xl font-semibold flex items-center gap-3 text-primary">
            {" "}
            <FaLaptopCode className="text-3xl" />
            My Journey
          </h3>
          <p>
            My journey started with curiosity learning small bits of code that
            slowly grew into real-world projects. Over time, I built multiple
            applications, improved my skills step by step, and developed a
            passion for creating clean, functional user experiences. I’m still
            learning every day.
          </p>
        </div>

        <div className="space-y-2 bg-white p-5 sm:p-8 rounded-xl ">
          <h3 className="text-xl font-semibold text-primary flex items-center gap-3">
            <FaQuestionCircle className="text-2xl" />
            Why Work With Me
          </h3>
          <p>
            I focus on clean code, responsive design, and smooth user
            experiences. I’m reliable, quick to learn, and fully committed to
            delivering modern, high-quality frontend solutions. I communicate
            clearly and always try to understand project needs to ensure the
            best results.
          </p>
        </div>
      </div>
    </Container>
    </Element>
  );
};

export default AboutMe;
