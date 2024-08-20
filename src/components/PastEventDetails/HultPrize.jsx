import React from "react";

function HultPrize() {
  return (
    <section className="flex flex-row w-full max-md:flex-col max-md:w-full">
      <div className="flex flex-col justify-center mt-4 ml-20 text-black w-[30%] max-md:w-full max-md:mt-10">
        <time
          dateTime="2023-05-30"
          className="self-start text-2xl text-center tracking-widest"
        >
          May 30, 2022
        </time>
        <div className="flex flex-col items-start px-1 mt-7 w-full">
          <h1 className="self-stretch text-6xl font-serif text-nowrap tracking-[4.2px] max-md:text-4xl">
            H<span className="text-3xl">ULT</span > P<span className="text-3xl">RIZE</span>
          </h1>
          {/* Increased gap between header and paragraph */}
          <p className="mt-8 text-2xl tracking-widest text-stone-500 max-md:ml-1.5">
            little about us section
          </p>
        </div>
      </div>
      <div className="relative w-[50%] z-0 min-h-[549px] max-md:w-full">
        <img
          loading="lazy"
          src="image 40.png"
          alt="Hackathon event poster"
          className="object-cover absolute inset-0 w-full h-full"
        />
      </div>
    </section>
  );
}

export default HultPrize;
