import React from "react";
import RegisterForm from "./RegisterForm";
import { GiCoffeeBeans } from "react-icons/gi";
import reg1 from "../../../public/reg1.jpg";
import Image from "next/image";

const page = () => {
  return (
    <section className="w-full min-h-screen flex items-center justify-center p-1 bg-gradient-to-r from-[#b89b84] via-[#e9d7c3] to-[#fffaf3]">
      <div className="p-3 bg-gray-200 rounded-3xl w-full max-w-6xl">
        <div className="w-full h-[80%] max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 p-2 bg-white rounded-3xl">
          {/*left side*/}
          <div className="relative">
            <div className="flex items-center absolute top-2 left-2 gap-2">
              <GiCoffeeBeans className="size-5" />
              <p className="text-lg">Caffinity</p>
            </div>
            <div className="mt-16">
              <RegisterForm />
            </div>
            <div className="absolute bottom-1 left-1">
              <p className="text-xs text-gray-500">
                copyright @ 2025 Caffinity
              </p>
            </div>
            <div className="absolute bottom-1 right-3">
              <p className="text-xs text-gray-500">Privacy Policy</p>
            </div>
          </div>

          {/*right side*/}
          <div>
            <Image
              src={reg1}
              alt=""
              className="h-160 w-full rounded-2xl"
            ></Image>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
