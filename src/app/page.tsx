import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import About from "./components/About";
import Products from "./components/Products";
import Contact from "./components/Contact";

const page = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Menu />
      <About />
      <Products />
      <Contact/>
    </div>
  );
};

export default page;
