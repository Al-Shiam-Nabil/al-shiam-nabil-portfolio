import React from "react";
import Container from "../Shared/Container";
import Heading from "../Shared/Heading";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaFacebookSquare,
} from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Element } from "react-scroll";
import MotionAnimation from "../Shared/MotionAnimation";

const Contact = () => {
  return (
    <Element name="contact">
      <Container>
        <Heading>Contact</Heading>

        <MotionAnimation>
          <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2  bg-info-content shadow-lg rounded-xl ">
              {/* left */}
              <div className="px-6 py-10 ">
                <h2 className="text-3xl font-semibold text-primary mb-3">
                  Get in Touch
                </h2>
                <p className="text-base-200 mb-6">
                  Let’s connect. Feel free to reach out for collaborations or
                  just a friendly hello!
                </p>

                {/* Location */}
                <div className="flex items-center  gap-4 p-4 rounded-lg bg-neutral-content mb-4">
                  <FaMapMarkerAlt className="text-primary text-xl" />
                  <div>
                    <h4 className="font-semibold">Location</h4>
                    <p className="text-base-200 text-sm">Bogura, Bangladesh</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-4 p-4 rounded-lg bg-neutral-content mb-4">
                  <FaPhoneAlt className="text-primary text-xl" />
                  <div>
                    <h4 className="font-semibold">Phone</h4>
                    <p className="text-base-200 text-sm">+880 1304261543</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-4 p-4 rounded-lg bg-neutral-content mb-4">
                  <FaEnvelope className="text-primary text-xl" />
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-base-200 text-sm">
                      nabil15-4777@diu.edu.bd
                    </p>
                  </div>
                </div>

                <div className="space-x-5 mt-7">
                  <a
                    href="https://www.linkedin.com/in/al-shiam-nabil/"
                    target="_blank"
                    className="hover:scale-110 duration-400 ease-in-out inline-block"
                  >
                    <FaLinkedin className="text-blue-500 text-3xl"></FaLinkedin>{" "}
                  </a>

                  <a
                    href="https://www.facebook.com/al.shiam.nabil"
                    target="_blank"
                    className="hover:scale-110 duration-400 ease-in-out inline-block"
                  >
                    <FaFacebookSquare className="text-blue-500 text-3xl"></FaFacebookSquare>{" "}
                  </a>

                  <a
                    href="https://github.com/Al-Shiam-Nabil"
                    target="_blank"
                    className="hover:scale-110 duration-400 ease-in-out inline-block"
                  >
                    <FaSquareGithub className="text-orange-500 text-3xl"></FaSquareGithub>{" "}
                  </a>

                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=nabil15-4777@diu.edu.bd"
                    target="_blank"
                    className="hover:scale-110 duration-400 ease-in-out inline-block"
                  >
                    <MdEmail className="text-red-600 text-3xl" />
                  </a>
                </div>
              </div>

              {/* right*/}
              <form className="space-y-4 bg-base-100 shadow py-10 px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-primary-content font-medium">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      required
                      className="w-full px-3 py-2 bg-info-content mt-2 border border-secondary rounded-md outline-none focus:ring-2 focus:ring-secondary"
                    />
                  </div>

                  <div>
                    <label className="text-primary-content font-medium">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email Address"
                      required
                      className="w-full px-3 py-2 bg-info-content mt-2 border border-secondary rounded-md outline-none focus:ring-2 focus:ring-secondary"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-primary-content font-medium">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows="5"
                    placeholder="Your message..."
                    required
                    className="w-full px-3 py-2 bg-info-content mt-2 border border-secondary rounded-md outline-none focus:ring-2 focus:ring-secondary"
                  ></textarea>
                </div>

                <button className="relative w-[150px] inline-flex items-center justify-center px-4 py-1.5 sm:py-2 rounded-full overflow-hidden tracking-tighter text-white bg-primary  group cursor-pointer">
                  <span className="absolute w-0 h-0 transition-all duration-1000 ease-out bg-accent rounded-full group-hover:w-56 group-hover:h-56"></span>

                  <span className="relative text-base  font-semibold">
                    Message
                  </span>
                </button>
              </form>
            </div>
          </div>
        </MotionAnimation>
      </Container>
    </Element>
  );
};

export default Contact;
