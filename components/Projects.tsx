import { PROJECTS } from "@/lib/projects";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Projects = () => {
  return (
    <section id="project" className="wrapper">
      <div className="flex flex-col md:py-24 py-14 md:px-44 md:ml-1">
        {PROJECTS.length > 0 ? (
          <div className="flex flex-col">
            <h1 className="text-lg font-bold text-blue-500 text-start">
              PROJECTS
            </h1>
            <h1 className="font-extrabold text-xl">
              Each project is a unique piece of development
            </h1>
            <div className="flex flex-col justify-center items-center mt-5">
              {PROJECTS.map((project, index) => (
                <div
                  key={project.id}
                  className={`flex mb-5 rounded-lg flex-col ${
                    index % 2 === 0 ? "md:flex-row " : "md:flex-row-reverse"
                  } justify-between p-10 shadow-sm w-full`}
                >
                <div
                    className={`md:w-4/6 flex ${
                        index % 2 === 0 ? "" : "justify-end"
                    } `}
                >
                    <Image
                        src={project.image}
                        alt="projectimage"
                        width={500}
                        height={200}
                        className="object-cover rounded-xl pointer-events-none select-none"
                        draggable="false"
                    />
                </div>
                  <div className="flex flex-col justify-center text-center md:w-2/6 items-center gap-3 mt-5 md:mt-0">
                    <h1 className="font-bold text-lg">{project.title}</h1>
                    <h1>{project.description}</h1>
                    <div className="font-bold gap-8 flex">
                      <h1>{project.tech1}</h1>
                      <h1>{project.tech2}</h1>
                    </div>
                    <div className="flex gap-5 mt-10">
                      <Link href={project.github}>
                        <div className="flex items-center gap-1 font-semibold cursor-pointer">
                          <h1>Code</h1>
                          <img
                            src="icons/github.png"
                            alt="github"
                            className="w-[35px] pointer-events-none select-none"
                            draggable="false"
                          />
                        </div>
                      </Link>
                      <Link href={project.demo}>
                        <div className="flex items-center gap-1 font-semibold cursor-pointer">
                          <h1>Live Demo</h1>
                          <img
                            src="icons/external-link.png"
                            alt="github"
                            className="w-[30px] pointer-events-none select-none"
                            draggable="false"
                          />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="md:text-3xl text-lg text-center font-semibold">
            New Projects coming soon...
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
