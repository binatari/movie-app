import React from "react";
import NavSearchBar from "../input/NavSearchBar";

const Header = () => {
  return (
    <header className="bg-[#1D283C] fixed top-0 w-full z-10">
      <nav className="container mx-auto flex justify-between items-center py-6">
        <img src="/images/Logo.svg" alt="logo" />
        <NavSearchBar />
      </nav>
    </header>
  );
};

export default Header;
