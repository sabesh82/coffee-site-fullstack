import React from "react";
import { AiFillAliwangwang } from "react-icons/ai";
import { FaCoffee, FaPhone } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { TiMessages } from "react-icons/ti";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full min-h-screen flex items-center justify-center bg-gradient-to-r from-[#b89b84] via-[#e9d7c3] to-[#fffaf3] relative pt-10"
    >
      <div className="flex flex-col text-center px-5 pb-15 pt-10">
        <div className="mb-4 flex justify-center">
          <FaCoffee className="text-4xl custom-metallic-text" />
        </div>
        <p className="text-4xl font-semibold mb-4 custom-metallic-text1">
          Let us chat! Our coffee-loving team is all ears.
        </p>
        <p className="text-2xl text-gray-700 mb-15">
          Let us know how we can help
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          {/*card section*/}
          <div className="flex flex-col p-10 bg-[#e9d7c3] relative text-left rounded-xl shadow-gray-400 shadow-xl hover:scale-102 border-1 border-[#4b2e2b]/50">
            <div className="absolute top-5 left-5 bg-gray-200 p-2 rounded-lg border-2 border-gray-300">
              <AiFillAliwangwang className="text-2xl text-black " />
            </div>

            <div className="flex flex-col mt-17">
              <p className="mb-2 font-bold text-xl">Chat to sales</p>
              <p className="mb-4 text-md">Speak to our friendly team</p>
              <a href="test@gmail.com" className="underline">
                sabesh27testing@gmail.com
              </a>
            </div>
          </div>

          <div className="flex flex-col p-10 bg-[#e9d7c3] relative text-left rounded-xl shadow-gray-400 shadow-xl hover:scale-102 border-1 border-[#4b2e2b]/50">
            <div className="absolute top-5 left-5 bg-gray-200 p-2 rounded-lg border-2 border-gray-300">
              <TiMessages className="text-2xl text-black " />
            </div>

            <div className="flex flex-col mt-17">
              <p className="mb-2 font-bold text-xl">Chat to support</p>
              <p className="mb-4 text-md">We are here to help</p>
              <a href="test@gmail.com" className="underline">
                sabesh27testing@gmail.com
              </a>
            </div>
          </div>

          <div className="flex flex-col p-10 bg-[#e9d7c3] relative text-left rounded-xl shadow-gray-400 shadow-xl hover:scale-102 border-1 border-[#4b2e2b]/50">
            <div className="absolute top-5 left-5 bg-gray-200 p-2 rounded-lg border-2 border-gray-300">
              <IoLocation className="text-2xl text-black " />
            </div>

            <div className="flex flex-col mt-17">
              <p className="mb-2 font-bold text-xl">Visit us</p>
              <p className="mb-4 text-md">visit our shop</p>
              <a href="test@gmail.com" className="underline">
                View on Google Maps
              </a>
            </div>
          </div>

          <div className="flex flex-col p-10 bg-[#e9d7c3] relative text-left rounded-xl shadow-gray-400 shadow-xl hover:scale-102 border-1 border-[#4b2e2b]/50">
            <div className="absolute top-5 left-5 bg-gray-200 p-2 rounded-lg border-2 border-gray-300">
              <FaPhone className="text-2xl text-black " />
            </div>

            <div className="flex flex-col mt-17">
              <p className="mb-2 font-bold text-xl">Call us</p>
              <p className="mb-4 text-md">Mon-Sat from 8am to 6pm</p>
              <p className="underline">+94 00 000 0000</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end absolute bottom-2 right-8">
        <p className="text-sm">@2025 Caffinity. All rights reserved</p>
      </div>
    </section>
  );
};

export default Contact;
