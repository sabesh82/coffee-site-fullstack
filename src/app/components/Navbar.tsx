"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { GiCoffeeBeans } from "react-icons/gi";
import { HiMenu, HiX } from "react-icons/hi";
import { BsCartCheck } from "react-icons/bs";
import { IoLogInOutline } from "react-icons/io5";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("#home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#menu", label: "Menu" },
    { href: "#about", label: "About" },
    { href: "#products", label: "Products" },
    { href: "#contact", label: "Contact" },
  ];

  const handleLinkClick = (href: string) => {
    setActiveLink(href);
    setIsMenuOpen(false);
  };

  return (
    <nav className="w-full fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#4b2e2b] via-[#8a664c] to-[#fdf6e3] text-white">
      <div className="w-full max-w-7xl mx-auto px-4 h-18 flex items-center justify-between relative">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <GiCoffeeBeans className="text-white size-5 md:size-7" />
          <p className="text-lg md:text-2xl font-bold font-mono">Caffinity</p>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="absolute top-5.5 right-4 md:hidden text-black"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <HiX size={25} /> : <HiMenu size={25} />}
        </button>

        {/*mobile login button*/}
        <button
          className="absolute top-5.5 right-12 md:hidden text-black"
          onClick={() => router.push("/register")}
        >
          <IoLogInOutline size={25} />
        </button>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-4">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} scroll>
              <span
                className={`cursor-pointer text-lg font-bold relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0
                  hover:after:w-full after:bg-white after:transition-all ${
                    activeLink === link.href
                      ? "text-white after:w-full"
                      : "text-black"
                  }`}
                onClick={() => handleLinkClick(link.href)}
              >
                {link.label}
              </span>
            </Link>
          ))}
        </div>

        {/*button section*/}
        <div className="flex gap-5">
          {/* Register Button */}
          <button className="hidden md:flex bg-[#4b2e2b] hover:bg-[#432825] p-[0.7] rounded-2xl overflow-hidden cursor-pointer">
            <div
              onClick={() => router.push("/register")}
              className="relative bg-white/5 px-4 py-2 text-white rounded-2xl border border-white/10
                  before:absolute before:inset-0.5 before:rounded-2xl before:border-t before:border-white/20"
            >
              Register
            </div>
          </button>
          {/*Cart button*/}
          <button
            onClick={() => router.push("/cart")}
            className="hidden md:flex absolute top-5.5 left-320"
          >
            <BsCartCheck className="size-6 text-black cursor-pointer font-semibold" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden w-full bg-gradient-to-b from-[#4b2e2b] via-[#b68c6d] to-[#fdf6e3] text-black p-3">
          <div className="w-full max-w-6xl mx-auto px-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} scroll>
                <span
                  className={`block text-md font-medium py-1 ${
                    activeLink === link.href ? "font-semibold" : "font-normal"
                  }`}
                  onClick={() => handleLinkClick(link.href)}
                >
                  {link.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
