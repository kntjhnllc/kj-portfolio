import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#2d2f33] py-10 ">
      <div className="wrapper ">
        <div className="flex justify-between items-center text-white md:px-44 ml-1">
          <p>Copyright © 2024. All rights are reserved</p>
          <div className="flex items-center gap-2 ">
            <Link
              href={"https://www.linkedin.com/in/kent-john-liloc-28530923a/"}
            >
              <img
                src="/icons/linkedin-white.png"
                alt="linkedin"
                className="cursor-pointer pointer-events-none"
              />
            </Link>
            <Link href={"https://github.com/kntjhnllc"}>
              <img
                src="/icons/github-white.png"
                alt="github"
                className="md:h-[40px] h-[37px] cursor-pointer pointer-events-none"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
