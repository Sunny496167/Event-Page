import React from "react";
import TeamMember from "./TeamMember";

function TeamSection({ title, teamName }) {
  const teamMembers = [
    { role: "Developer", name: "Alex Wandaey", image: "https://www.pngarts.com/files/7/Female-College-Student-PNG-Photo.png" },
    { role: "Developer", name: "Alex Wandaey", image: "https://offertabs.s3.amazonaws.com/offer/qy9s4z/large/810_1920_6095afa41d80b-SeniorPic.JPG" },
    { role: "Designer", name: "Alex Wanda", image: "https://thumbs.dreamstime.com/b/portrait-female-student-standing-college-building-portrait-female-student-standing-college-building-104866088.jpg" },
  ];

  return (
    <section className="w-full max-w-[1055px]">
      <h2 className="self-start mt-36 text-4xl font-bold text-black max-md:mt-10 max-md:ml-2.5">
        {title}
      </h2>
      <div className="flex flex-col justify-center px-3 py-6 mt-3 max-w-full bg-white rounded-2xl shadow-[4px_4px_25px_rgba(0,0,0,0.25)] w-[1055px] max-md:pr-5">
        <div className="flex flex-col px-20 pb-5 w-full bg-white rounded-3xl max-md:px-5 max-md:max-w-full">
          <h3 className="self-center text-3xl font-bold text-fuchsia-700">
            {teamName}
          </h3>
          <p className="mt-12 text-xl text-black max-md:mt-10 max-md:max-w-full">
            Lorem Ipsum is simply dummy text of the printing and typesetting inLorem Ipsum is simply dummy text of the printing and typesetting in votting in
          </p>
          <div className="mt-10 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
              {teamMembers.map((member, index) => (
                <TeamMember key={index} {...member} />
              ))}
            </div>
          </div>
          <div className="flex self-center mt-14 max-w-full text-white whitespace-nowrap w-[172px] max-md:mt-10">
           
            <button className="overflow-hidden gap-3 self-stretch p-5 py-2.5 text-2xl font-semibold leading-none bg-purple-700 min-h-[45px] rounded-[999px] shadow-[3px_4px_8px_rgba(159,2,255,0.25)] max-md:px-5">
              Explore
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TeamSection;