"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const Hero = () => {
  const router = useRouter();
  return (
    <section
      id="home"
      className="w-full min-h-screen flex items-center justify-center bg-gradient-to-r from-[#b89b84] via-[#e9d7c3] to-[#fffaf3] relative"
    >
      <div className="w-full max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2">
        <div className="mt-25 md:mt-30">
          <h1 className="text-justify md:text-start text-6xl md:text-7xl font-bold">
            Crafted Coffee, Curated Comfort.
          </h1>
          <p className="text-lg md:text-xl mt-4 text-start">
            {" "}
            - From bean to brew — elevate your everyday experience -
          </p>
          <div className="flex items-center gap-3 md:gap-4 mt-6 md:mt-12 justify-start ml-2">
            <Link
              href="/cart"
              className="px-3 py-1 bg-[#6e3b11] text-white rounded-xl border-3 border-white hover:scale-102 cursor-pointer"
            >
              View cart
            </Link>
            <button
              onClick={() => router.push("/#menu")}
              className="px-3 py-1 bg-[#6e3b11] text-white rounded-xl border-3 border-white hover:scale-102 cursor-pointer"
            >
              View menu
            </button>
          </div>
        </div>

        <div className="md:flex items-center justify-center px-4">
          <img src="/img.png" alt="" className="h-60 w-60 md:h-130 md:w-130" />
        </div>
      </div>

      <div className="hidden md:flex absolute bottom-3 left-3">
        <img src="/design.png" alt="" className="h-55 w-70" />
      </div>

      <div className="hidden md:flex absolute top-50 right-23">
        <img src="/design1.png" alt="" className="h-40 w-40" />
      </div>
    </section>
  );
};

export default Hero;
