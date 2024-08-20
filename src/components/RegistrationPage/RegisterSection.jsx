import React from "react";

function RegisterSection() {
  return (
    <section className="flex flex-col ml-5 w-[61%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col w-full max-md:mt-10 max-md:max-w-full">
        <div className=" self-end mr-24 max-w-full text-white whitespace-nowrap max-md:mr-2.5">
          <button className="gap-3 self-stretch px-6 py-2 text-2xl font-medium tracking-widest bg-sky-700 min-h-[46px] rounded-[999px] shadow-[0px_3px_8px_rgba(2,37,255,0.25)] w-[149px] max-md:px-5 hover:bg-sky-600">
            Register
          </button>
        </div>
        <div className="relative mt-10 w-full min-h-[549px] max-md:max-w-full">
          <img
            loading="lazy"
            src="image 40.png"
            alt="Hackathon event poster"
            className="object-cover absolute inset-0 size-full"
          />
          <p className="relative z-10 px-16 pt-9 text-center text-nowrap text-2xl font-bold tracking-widest text-red-600 max-md:px-5">
            Last Date May 20, 12.00 AM
          </p>
        </div>
      </div>
    </section>
  );
}

export default RegisterSection;
