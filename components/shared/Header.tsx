'use client'
import Link from "next/link";
import React, { useEffect } from "react";
import NavItems from "./NavItems";
import MobileNav from "./MobileNav";

const Header = () => {

  return (
    <header className="w-full shadow-md fixed top-0 z-[50] bg-white">
      <div className="wrapper flex  justify-between center">
        <Link href="/" className="w-36">
          <h1 className="font-semibold text-xl">kj.dev</h1>
        </Link>
        <nav className="md:flex-between hidden  w-full max-w-xs">
          <NavItems />
        </nav>
        <div className="flex w-32 !justify-end gap-3 md:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;