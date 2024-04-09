import Link from "next/link";
import React from "react";
import NavItems from "./NavItems";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="w-full shadow-md ">
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
