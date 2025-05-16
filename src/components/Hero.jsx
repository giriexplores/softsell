import React from "react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-wrap lg:flex-row items-center justify-center bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-6 lg:px-20 py-20">
      {/* Demo Image */}
      <div className="lg:w-1/2 w-[300px] lg:mt-0 flex justify-center ">
        <img
          src="https://cdn.pixabay.com/photo/2025/05/13/12/24/man-9597484_640.png"
          alt="SoftSell dashboard preview"
          className="w-full max-w-md drop-shadow-xl"
          loading="lazy"
        />
      </div>

      {/* Text Content */}
      <div className="lg:w-1/2 space-y-6 lg:text-left">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
          Maximize Your Unused Software Value
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300">
          SoftSell helps you resell your surplus software licenses quickly,
          securely, and at the best market rates.
        </p>
        <button className="mt-4 bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg shadow hover:bg-blue-700 transition active:scale-95">
          Sell My Licenses
        </button>
      </div>
    </section>
  );
};

export default Hero;
