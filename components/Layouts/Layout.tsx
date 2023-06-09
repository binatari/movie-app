import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { motion } from "framer-motion";

type PropsWithChildren = {
  children: React.ReactNode;
};
const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="bg-[#1B1F32] overflow-hidden">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
