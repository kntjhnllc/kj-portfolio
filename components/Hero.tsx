import Link from "next/link";

const Hero = () => {
  return (
    <div className="wrapper xl:mt-0 sm:mt-10  mt-14">
      <div className="flex flex-col">
        <div className="flex md:flex-row md:justify-between xl:px-40 xl:py-44 
             flex-col-reverse justify-center  items-center  mt-10">
          <div className="flex flex-col md:mt-0 mt-14">
            <div className="text-4xl md:text-5xl font-black flex   md:text-start  text-center  items-center justify-center md:justify-start w-full md:px-0 px-20 ml-5 md:ml-4">
              Full-Stack
              <br className="" />
              Developer
              <img
                src="/icons/wave-icon.png"
                alt="wave"
                className=" relative w-[40px] mr-5 mt-11 md:mt-[40px] md:ml-[10px]  pointer-events-none select-none"
              />
            </div>

            <div className=" flex text-center  md:text-start px-5 mt-5">
              <p className="font-light">
                Hi! I'm Kent John Liloc. An aspiring and passionate full-stack
                developer based on Davao City, Philippines.
              </p>
              <img
                src="/icons/pin.png"
                alt="pin"
                className="absolute h-[20px] mt-[50px] ml-[270px] md:mt-[25px] md:ml-[260px]  pointer-events-none select-none"
              />
            </div>
            <div className="flex mt-10 md:ml-4 justify-center md:justify-start">
              <Link
                href={"https://www.linkedin.com/in/kent-john-liloc-28530923a/"}
              >
                <img
                  src="/icons/linkedin.png"
                  alt="linkedin"
                  width={40}
                  className="cursor-pointer  pointer-events-none select-none"
                />
              </Link>
              <Link href={"https://github.com/kntjhnllc"}>
                <img
                  src="/icons/github.png"
                  alt="github"
                  width={35}
                  className="cursor-pointer  pointer-events-none select-none"
                />
              </Link>
            </div>
          </div>
          <div className="md:mr-10 z-10 ">
            <img
              className="hero-image-container min-w-[300px]  pointer-events-none select-none"
              src="/images/kjliloc.jpg"
              alt="kent"
              width={300}
            />
          </div>
        </div>
        <div className="w-full flex md:flex-row flex-col font-semibold items-center justify-center  md:px-44 ml-1">
          <div className="flex  text-center items-center justify-center ">
            <h1 className="md:mr-5 text-nowrap w-full md:flex-row flex flex-col md:mb-0 mb-7 md:mt-0 mt-10">
              Tech Stack
              <span className="md:block hidden md:ml-10">|</span>{" "}
              <span className="md:hidden block">
                <hr className="rounded-full h-1 bg-black" />
              </span>
            </h1>
          </div>
          <div className="flex md:gap-14 gap-10 w-full md:ml-5 flex-wrap items-center justify-center">
            <div className="flex md:gap-5 gap-1 hover:-translate-y-8 transition transform duration-300">
              <Link href={"https://html.com/"}>
                <img
                  src="icons/html.png"
                  alt="html"
                  
                  className="cursor-pointer md:w-[35px] w-[50px]  pointer-events-none select-none"
                />
              </Link>
              <Link href={"https://www.w3schools.com/css/css_intro.asp"}>
                <img
                  src="icons/css.png"
                  alt="css"
                  className="cursor-pointer md:w-[35px] w-[50px]  pointer-events-none select-none"
                />
              </Link>
            </div>
            <div className="flex md:gap-5 gap-1 hover:-translate-y-8 transition transform duration-300">
              <Link href={"https://www.javascript.com/"}>
                <img
                  src="icons/js.png"
                  alt="js"
                  className="rounded-sm md:w-[35px] w-[50px]  pointer-events-none select-none"
                />
              </Link>
              <Link href={"https://www.typescriptlang.org/ "}>
                <img
                  src="icons/ts.png"
                  alt="ts"
                  className="cursor-pointer md:w-[35px] w-[50px]  pointer-events-none select-none"
                />
              </Link>
            </div>
            <div className="flex md:gap-5 gap-1 hover:-translate-y-8 transition transform duration-300">
              <Link href={"https://nextjs.org/"}>
                <img
                  src="icons/nextjs.svg"
                  alt="next"
                  className="cursor-pointer md:w-[35px] w-[50px]  pointer-events-none select-none"
                />
              </Link>
              <Link href={"https://nestjs.com/"}>
                <img
                  src="icons/nestjs.svg"
                  alt="nest"
                  className="cursor-pointer md:w-[35px] w-[50px]  pointer-events-none select-none"
                />
              </Link>
            </div>
            <div className="flex md:gap-5 gap-1 hover:-translate-y-8 transition transform duration-300">
              <Link href={"https://typeorm.io/"}>
                <img
                  src="icons/typeorm.svg"
                  alt="next"
                  className="cursor-pointer md:w-[35px] w-[50px]  pointer-events-none select-none"
                />
              </Link>
              <Link href={"https://www.postgresql.org/"}>
                <img
                  src="icons/postgresql.svg"
                  alt="nest"
                  className="cursor-pointer md:w-[35px] w-[50px]  pointer-events-none select-none"
                />
              </Link>
            </div>
            <div className="flex md:gap-5 gap-1 hover:-translate-y-8 transition transform duration-300">
            <Link href={"https://tailwindcss.com/"}>
              <img
                src="icons/tailwind.png"
                alt="tailwind"
                width={35}
                className="cursor-pointer md:w-[35px] w-[50px]  pointer-events-none select-none"
              />
            </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
