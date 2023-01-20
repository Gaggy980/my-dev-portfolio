import React, { useState } from "react";
import { Link } from "react-scroll";
import CV from "../assets/IgorGagicResume.pdf"
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFillFileEarmarkArrowDownFill } from "react-icons/bs";
import Logo from "../assets/IGlogo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const toggleNav = () => setNav(!nav);
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-5 bg-[#1B1F2B] text-gray-300 shadow-md z-20">
      {/* logo */}
      <div>
        <img src={Logo} alt="Logo" className="" />
      </div>
      {/* menu */}
      <ul className="hidden md:flex text-lg">
        <li >
          <Link tabIndex="1" to="home" smooth={true} offset={0} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link tabIndex="2" to="about" smooth={true} offset={50} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link tabIndex="3" to="work" smooth={true} offset={-90} duration={500}>
            Work
          </Link>
        </li>
        <li>
          <Link tabIndex="4" to="contact" smooth={true} offset={50} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      {/* hamburger */}
      <div
        onClick={toggleNav}
        className="md:hidden z-10 hover:text-lprim duration-300"
      >
        {!nav ? <FaBars size={30} /> : <FaTimes size={30} />}
      </div>
      {/* mobile menu */}
      <ul
        className={
          nav
            ? "absolute top-0 left-0 w-full h-screen bg-bgcolor flex flex-col justify-center items-center "
            : "hidden"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={toggleNav} to="home" smooth={true} offset={0} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={toggleNav} to="about" smooth={true} offset={0} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={toggleNav} to="work" smooth={true} offset={-90} duration={500}>
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={toggleNav} to="contact" smooth={true} offset={-20} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      
      {/* social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul className="">
          <li className="social-card bg-lprim">
            <a tabIndex="6" className="social-link " target="_blank" href="https://www.linkedin.com/in/igor-gagic-7763a9248/">
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="social-card bg-[#333333]">
            <a tabIndex="7" className="social-link " target="_blank" href="https://github.com/Gaggy980">
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="social-card bg-green-700">
            <a tabIndex="8" className="social-link" target="_blank" href={CV}>
              Check My CV
              <BsFillFileEarmarkArrowDownFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
