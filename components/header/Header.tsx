import React from "react";
import NavSearchBar from "../input/NavSearchBar";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-[#1D283C] fixed top-0 w-full z-10">
      <nav className="container mx-auto flex justify-between items-center py-6">
        <Link href={"/"} className="z-50">
          <img src="/images/Logo.svg" alt="logo" className="cursor-pointer" />
        </Link>

        <NavSearchBar />
      </nav>
    </header>
  );
};

export default Header;
