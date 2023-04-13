import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";

type PropsWithChildren = {
  children: React.ReactNode;
};
const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="bg-[#1B1F32]">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
