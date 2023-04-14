import React, { useState } from "react";
import NavSearchBar from "../input/NavSearchBar";
import Link from "next/link";

const Header = () => {
  const [showMobileNav, setShowMobileNav] = useState<boolean>(false);

  const handleSwitch = () => {
    setShowMobileNav(!showMobileNav);
  };

  return (
    <div className=" fixed top-0 w-full z-10">
      <header className="bg-[#1D283C]  w-full z-10 px-4 md:px-0">
        <nav className="container mx-auto flex justify-between items-center py-6">
          <Link href={"/"} className="z-50">
            <img src="/images/Logo.svg" alt="logo" className="cursor-pointer" />
          </Link>
          <div className="md:block hidden w-full max-w-[330px]">
            <NavSearchBar />
          </div>
          <div className="md:hidden flex items-center" onClick={handleSwitch}>
            {!showMobileNav ? (
              <img src="/images/search.png" alt="open-mobile-search" />
            ) : (
              <img src="/images/menu.png" alt="close-mobile-search" />
            )}
          </div>
        </nav>
      </header>
      {showMobileNav ? (
        <div className=" md:hidden">
          <div className="py-8 bg-[#1B1F32] w-full flex md:hidden justify-center">
            <NavSearchBar />
          </div>
          <div className="min-h-screen w-full blur-sm bg-black bg-opacity-60 z-[9999] relative"></div>
        </div>
      ) : null}
    </div>
  );
};

export default Header;
