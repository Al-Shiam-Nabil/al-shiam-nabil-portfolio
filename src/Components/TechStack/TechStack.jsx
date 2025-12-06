import React from "react";
import Container from "../Shared/Container";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiNetlify,
  SiTailwindcss,
  SiVercel,
} from "react-icons/si";
import Heading from "../Shared/Heading";
import { Element } from "react-scroll";
import MotionAnimation from "../Shared/MotionAnimation";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-4xl text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-4xl text-blue-500" /> },
  {
    name: "JavaScript",
    icon: <SiJavascript className="text-4xl text-yellow-500" />,
  },
  { name: "React", icon: <FaReact className="text-4xl text-cyan-400" /> },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-4xl text-sky-500" />,
  },
  { name: "Node.js", icon: <FaNodeJs className="text-4xl text-green-600" /> },
  {
    name: "Express.js",
    icon: <SiExpress className="text-4xl text-gray-700" />,
  },
  { name: "MongoDB", icon: <SiMongodb className="text-4xl text-green-700" /> },
  { name: "Git", icon: <FaGitAlt className="text-4xl text-orange-600" /> },
  {
    name: "Firebase",
    icon: <SiFirebase className="text-4xl text-yellow-500" />,
  },
  { name: "Netlify", icon: <SiNetlify className="text-4xl text-teal-500" /> },
  { name: "Vercel", icon: <SiVercel className="text-4xl text-black" /> },
];

const TechStack = () => {
  return (
    <>
      <Element name="techStack">
        <Container>
          <Heading>Tech Stack</Heading>

          <MotionAnimation>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 sm:gap-6  mx-auto">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="bg-info-content rounded-xl shadow-sm p-6 flex flex-col items-center justify-center 
                       hover:shadow-md transition-all"
                >
                  {skill.icon}
                  <p className="mt-2 text-base font-medium ">{skill.name}</p>
                </div>
              ))}
            </div>
          </MotionAnimation>
        </Container>
      </Element>
    </>
  );
};

export default TechStack;
