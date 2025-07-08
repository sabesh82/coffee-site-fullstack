"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Cookie from "js-cookie";
import { cookieKeys } from "@/config/cookies.config";
import { TbLogout } from "react-icons/tb";
import toast from "react-hot-toast";

const Hero = () => {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = Cookie.get(cookieKeys.USER_TOKEN);
    setIsLoggedIn(!!token);
  }, []);

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

      {isLoggedIn && (
        <button
          onClick={() => {
            const confirmLogout = window.confirm(
              "Are you sure you want to logout?"
            );
            if (confirmLogout) {
              Cookie.remove(cookieKeys.USER_TOKEN);
              toast.success("You have been logged out.");
              router.push("/login");
            }
          }}
          className="absolute bottom-2 right-1.5 md:bottom-6 md:right-6 bg-red-500 hover:bg-red-600 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-2xl shadow-lg shadow-red-400 transition cursor-pointer"
        >
          <TbLogout className="size-5" />
        </button>
      )}
    </section>
  );
};

export default Hero;
