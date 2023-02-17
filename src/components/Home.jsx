import React from "react";
import { Link } from "react-scroll";
import CV from "../assets/IgorGagicResume.docx"
import { HiArrowNarrowRight } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFillFileEarmarkArrowDownFill } from "react-icons/bs";

const Home = () => {
  return (
    <div name="home" className="bg-bgcolor w-full h-screen">
      {/* Conteiner */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full z-10">
        <p className="text-lprim text-xl">Hi, my name is </p>
        <h1 className="text-4xl font-semibold sm:text-7xl sm:font-bold text-lsec">
          Igor Gagic
        </h1>
        <h2 className="text-4xl font-semibold sm:text-7xl sm:font-bold text-dsec/80">
          {" "}
          Web Developer
        </h2>
        <p className="text-xl text-dsec/80 max-w-[700px]">
          I'm a web developer specializing in building amazing UI experiances.
          Currently, my focus is on building responsive web applications and
          reusable components.
        </p>
        {/* check work button */}
        <div className="flex flex-col mt-[1rem] sm:flex-row">
          <Link
            tabIndex="5"
            className="btn group"
            to="work"
            smooth={true}
            offset={-90}
            duration={500}
          >
            Check My Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-2" />
            </span>
          </Link>
            {/* social icons for smaller devices */}
          <ul className="flex items-center justify-center gap-3 -ml-[7rem] sm:ml-[5rem] mt-10 sm:mt-0 lg:hidden">
            {/* Linkedin */}
            <li className="relative hover-trigger ">
              <div className="soc-round hover:scale-125 duration-300">
                <a target="_blank" href="https://www.linkedin.com/in/igor-gagic-dev/">
                  <FaLinkedin size={30} />
                </a>
              </div>
              <p className="absolute hover-target text-sm text-lprim font-semibold tracking-wide -bottom-8  left-[0.7rem] ">
                LinkedIn
              </p>
            </li>
            {/* Github */}
            <li className="relative hover-trigger">
              <div className="soc-round bg-dsec hover:scale-125 duration-300">
                <a target="_blank" href="https://github.com/Gaggy980">
                  <FaGithub size={30} />
                </a>
              </div>
              <p className="absolute hover-target text-sm text-dsec font-semibold tracking-wide -bottom-8 left-[0.9rem] text-center">
                Github
              </p>
            </li>
            {/* Cv download */}
            <li className="relative hover-trigger">
              <div className="soc-round bg-green-700 hover:scale-125 duration-300">
                <a target="_blank" href={CV}>
                  <BsFillFileEarmarkArrowDownFill size={30} />
                </a>
              </div>
              <p className="absolute hover-target text-sm text-green-700 font-semibold tracking-wide -bottom-12 left-0 text-center">
               Check My CV
              </p>
            </li>
            
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
