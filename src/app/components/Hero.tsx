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
          <h1 className="text-justify md:text-start text-6xl custom-metallic-text md:text-7xl font-bold">
            Crafted Coffee, Curated Comfort.
          </h1>
          <p className="text-lg md:text-xl mt-4 text-start">
            {" "}
            - From bean to brew — elevate your everyday experience -
          </p>
          <div className="flex items-center gap-3 md:gap-4 mt-6 md:mt-12 justify-start ml-2">
            <button className="bg-[#4b2e2b] hover:bg-[#432825] p-[0.7] rounded-2xl overflow-hidden cursor-pointer">
              <div
                onClick={() => router.push("/cart")}
                className="relative bg-white/5 px-4 py-2 text-white rounded-2xl border border-white/10
                  before:absolute before:inset-0.5 before:rounded-2xl before:border-t before:border-white/20"
              >
                View cart
              </div>
            </button>

            <button className="bg-[#4b2e2b] hover:bg-[#432825] p-[0.7] rounded-2xl overflow-hidden cursor-pointer">
              <div
                onClick={() => router.push("/#menu")}
                className="relative bg-white/5 px-4 py-2 text-white rounded-2xl border border-white/10
                  before:absolute before:inset-0.5 before:rounded-2xl before:border-t before:border-white/20"
              >
                View menu
              </div>
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
