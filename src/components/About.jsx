import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-bgcolor text-lsec sm:text-xl">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-semibold inline border-b-4 border-lprim">
              About
            </p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="text-3xl font-semibold sm:text-right text-dsec ">
            <p className="">
              Hey, nice to meet you. Please take a look arround.
            </p>
          </div>
          <div className="">
            <p className="">
              I'm a Frontend Web Developer building the Front-end of Websites
              and Web Applications that leads to the success of the overall
              product. Check out some of my work in the Projects section.
              <br />
              I also like sharing content related to the stuff that I have
              learned in Development so it can help other people in the Dev
              Community. Feel free to Connect or Follow me on my Linkedin
              <br />
              I'm open to Job opportunities where I can contribute, learn and
              grow. If you have a good opportunity that matches my skills and
              experience don't hesitate to contact me.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
