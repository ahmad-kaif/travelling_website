import React from "react";
import TravelPackages from "./Packages";

export default function Hero() {
  return (
    <>
      <section className="relative w-full h-screen overflow-hidden z-0">
        {/* Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          src="https://www.w3schools.com/howto/rain.mp4" // Video source
          autoPlay
          loop
          muted
        />

        {/* Overlay Content */}
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-50 text-center z-10">
          <h1 className="text-white text-5xl font-bold mb-4">
            Discover Your Next Adventure
          </h1>
          <p className="text-white text-lg mb-6">
            Explore the world's most beautiful places with our curated travel
            packages.
          </p>
          <button className="bg-green-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-600 transition duration-300">
            Get Started
          </button>
        </div>
      </section>
      <TravelPackages/>


      
    </>
  );
}
