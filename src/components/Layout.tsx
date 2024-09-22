import React from "react";
import NavBar from "./NavBar";
import TaskBar from "./TaskBar";
import HeroSection from "./HeroSection";
import Footer from "./Footer";
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="">
      <TaskBar />
      <NavBar />
      <HeroSection />
      <div className="container mx-auto px-4 py-5 flex justify-between"></div>
      <main className=" px-6">{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
