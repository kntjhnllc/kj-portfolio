"use client";
import React, { useEffect, useRef } from "react";

const About: React.FC = () => {
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (textRef.current) {
      const textElement = textRef.current;
      const textContent = textElement.textContent;
      if (textContent) {
        textElement.innerHTML = textContent
          .split("")
          .map(
            (char, i) =>
              `<span style="transform:rotate(${i * 14.5}deg)">${char}</span>`
          )
          .join("");
      }
    }
  }, []);

  return (
    <section
      id="about"
      className="bg-white flex items-center justify-center mt-10 md:py-32"
    >
      <div className="wrapper">
        <div className="flex md:flex-row flex-col items-center justify-center md:gap-14 md:px-44 md:ml-1">
          <div>
            <img
              src="/icons/about.jpg"
              alt="about"
              className="rounded-2xl min-w-[400px] max-w-[400px]"
            />
            <div className="absolute circle md:-mt-[130px] md:ml-[260px] -mt-[80px] ml-[105px] w-[190px] h-[180px] p-4 bg-white rounded-full flex flex-col items-center justify-center">
              <div className="logo">
                <img
                  src="/icons/about-developer.png"
                  alt="developer"
                  className="min-w-[80px] max-w-[80px]"
                />
              </div>
              <div className="text">
                <p ref={textRef} className="text-black text-sm text-center font-semibold">
                  FULL-STACK WEB DEVELOPER
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5 mt-24 md:mt-0">
            <h1 className="text-blue-500 font-bold text-lg">ABOUT ME</h1>
            <h1 className="font-extrabold text-xl">
              A dedicated Full-stack Developer based in Davao City, Philippines.
            </h1>
            <p className="text-md text-gray-600">
              Hi, I'm Kent, a Full-stack Developer. I love making websites and
              apps that people enjoy using.
            </p>
            <p className="text-md text-gray-600">
              My primary stack involves using Next.js for the frontend and
              Nest.js for the backend, with TypeScript and Tailwind CSS as my
              preferred frameworks.
            </p>
            <p>But I'm happy to be involved with other technologies as well.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
