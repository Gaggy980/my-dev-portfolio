import React from "react";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-full bg-bgcolor flex justify-center items-center p-4 "
    >
      <form
        method="POST"
        action="https://getform.io/f/c1c2a869-9dc7-4fb6-8a80-ced1e7387895"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-semibold inline border-b-4 border-lprim text-lsec">
            Contact
          </p>
          <p className="pt-8 text-xl text-dsec">
            Submit the form or send me an email
          </p>
          <div className="pt-1 sm:pb-6 text-xl text-dprim flex items-center gap-2">
            <SiGmail className="text-lprim animate-pulse" />
            <a href="mailto:igorgagic.dev@gmail.com">igorgagic.dev@gmail.com</a>
          </div>
        </div>
        <input
          className="input-styles"
          type="text"
          name="name"
          placeholder="Name"
        />
        <input
          className="input-styles"
          type="email"
          name="email"
          placeholder="Email"
        />
        <textarea
          className="input-styles"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-lsec border-2 border-lprim px-4 py-3 my-2 rounded-md hover:bg-lprim hover:text-bgcolor duration-300 text-lg font-bold tracking-wider mx-auto">
          Submit the form
        </button>

        <p className="mt-[2rem] text-center text-sm text-dprim/50">
          copyright 2020,Dublin,Ireland
        </p>
      </form>
    </div>
  );
};

export default Contact;
