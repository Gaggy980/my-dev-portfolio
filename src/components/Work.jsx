import React from "react";
import Home from "../assets/projHome.png";
import Tech from "../assets/projTech.png";
import ProjectItem from "./ProjectItem";

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen bg-bgcolor text-lsec pb-[10rem]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-semibold inline border-b-4 border-lprim">
            My Work
          </p>
          <p className="py-8 text-xl text-dsec">
            Check out some of my recent work:
          </p>
        </div>

        {/* projects contener */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">

            {/* project item */}
          <ProjectItem 
          title="Nikola Tesla Tribute"
          about="Tribute web page made with plain HTML and CSS."
          imageUrl="https://cdn.sanity.io/images/jybviyyg/production/e693f9c5359a881811f354e339bbfc4ee3fb95a8-1792x1202.png"
          demoUrl="https://codepen.io/Iggy_g/full/eYgbXyy"
          codeUrl="https://codepen.io/Iggy_g/pen/eYgbXyy"
          />
            {/* project item */}
          <ProjectItem 
          title="Cookery school form"
          about="Front End for cookery school survey with HTML and CSS."
          imageUrl="https://cdn.sanity.io/images/jybviyyg/production/06ca9812aaf5f1799a2a82f7214bdba5ebd1f8cf-1948x1206.png"
          demoUrl="https://codepen.io/Iggy_g/full/GRrzJPw"
          codeUrl="https://codepen.io/Iggy_g/pen/GRrzJPw"
          />
            {/* project item */}
          <ProjectItem 
          title="Mad Coffee"
          about="Simple webpage made in React.js for a local cafe. Fully responsive components."
          imageUrl="https://cdn.sanity.io/images/jybviyyg/production/c0c0ecdfd8bb2962d6d05881a6fc64d4dfd58ccd-2544x1301.png"
          demoUrl="https://madcoffee-page.netlify.app"
          codeUrl="https://github.com/Gaggy980/madcoffee"
          />
          <ProjectItem 
          title="Linux Funpage"
          about="Web page for Linux fans made in HTML and CSS as part of the 'Odin Project' Bootcamp assignment."
          imageUrl="https://cdn.sanity.io/images/jybviyyg/production/941871456ff582ca20d6f579fe12c441af8c84a8-2535x1264.png"
          demoUrl="https://gaggy980.github.io/html_landing_page/"
          codeUrl="https://github.com/Gaggy980/html_landing_page"
          />
          <ProjectItem 
          title="My Travel"
          about="Travel agency front-end boilerplate, fully responsive, made with plain HTML and CSS. "
          imageUrl="https://cdn.sanity.io/images/jybviyyg/production/cd6244b8e2f3bc1f67b8e1664eeefdafdb57b738-2097x1284.png"
          demoUrl="https://gaggy980.github.io/travel-webpage/"
          codeUrl="https://github.com/Gaggy980/travel-webpage"
          />
          <ProjectItem 
          title="Social Point"
          about="Web app simmilar to pintrest, where users can shate images. Using sanity as backend, google Authenticator for login.
          Made in Next.js and styled with TailwindCSS. "
          imageUrl="https://cdn.sanity.io/images/jybviyyg/production/2b445b6407e152c5c9dd1174625f95c193b526cc-2398x1271.png"
          demoUrl="https://socialpoint.netlify.app/"
          codeUrl="https://github.com/Gaggy980/social_frontend"
          />
          <ProjectItem 
          title="Sound Vibe"
          about="E-commerce website build with Next.js react framework,Sanity database and Stripe
          payment implementation.Test Credit card creddentials:No- 4242 4242 4242 4242, Ex/Date-42/42
          , pin-424."
          imageUrl="https://cdn.sanity.io/images/jybviyyg/production/42bb56d3b51f55229f37b1893e277b4d22ed2cfd-1736x1281.png"
          demoUrl="https://sound-vibe.vercel.app/"
          codeUrl="https://github.com/Gaggy980/sound-vibe"
          />
           
           
         
        </div>
      </div>
    </div>
  );
};

export default Work;
