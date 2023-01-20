import React from "react";

const ProjectItem = ({ imageUrl, demoUrl, codeUrl,title, about }) => {
  return (
    <div
      style={{ backgroundImage: `url(${imageUrl})` }}
      className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
    >
      {/* hover effects */}
      <div className="opacity-0 group-hover:opacity-100 gruop-focus:opacity-100">
        <h1 className="text-center text-xl text-black font-bold">{title}</h1>
        <p className="mx-4 leading-4 text-black font-semibold">{about}</p>
        <div className="pt-8 text-center">
          <a href={demoUrl} target="_blank">
            <button className="text-center rounded-lg px-4 bg-dsec py-3 m-2 text-bgcolor font-bold hover:bg-lprim duration-300 text-lg">
              Demo
            </button>
          </a>
          <a href={codeUrl} target="_blank">
            <button className="text-center rounded-lg px-4 bg-dsec py-3 m-2 text-bgcolor font-bold hover:bg-lprim duration-300 text-lg">
              Code
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
