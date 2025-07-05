import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="w-full min-h-screen flex items-center justify-center bg-gradient-to-r from-[#b89b84] via-[#e9d7c3] to-[#fffaf3] pb-15 pt-25 md:pt-15"
    >
      <div className="w-full max-w-6xl mx-auto px-4 flex flex-col items-center">
        <h1 className="text-5xl font-semibold mb-12 text-[#4b2e2b]">
          About Us
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          <img
            src="/about.jpg"
            alt=""
            className="rounded-xl border-2 border-[#8e4306]"
          />

          <div className="flex flex-col">
            <h1 className="text-4xl font-semibold mb-5">
              Speciality of out Coffee..
            </h1>
            <p className="text-justify text-md font-medium text-lg">
              At the heart of our cafe lies a passion for crafting the perfect
              cup. What sets our coffee apart is our unwavering commitment to
              quality — we source only the finest, ethically grown beans from
              high-altitude farms, roast them in small batches to preserve their
              natural richness, and brew with precision to bring out the unique
              flavor profile of each origin. Whether it is the bold intensity of
              an espresso or the smooth comfort of a latte, every sip delivers a
              harmonious blend of aroma, taste, and warmth. It is more than just
              coffee — it is an experience handcrafted with care.
            </p>

            <button className="px-3 py-2 bg-[#6e3b11] hover:scale-102 mt-6 rounded-xl w-50 text-white border-2 border-white cursor-pointer">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
