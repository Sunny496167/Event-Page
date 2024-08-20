import React from "react";
import { NavLink, Link } from "react-router-dom";
import PastEventCard from "./PastEventCard";
import EventCard from "./EventCard";

const upcomingEvents = [
  {
    image: "image 40.png",
    title: "Hack Your Way",
    startTime: "Saturday 11.30 AM",
    endTime: "Sunday 11.30 AM",
    registerClosesAt: "Thrusday 12.00 A.M",
  },
  {
    image: "image 40.png",
    title: "Bizz plan",
    startTime: "Monday 10.00 AM",
    endTime: "Monday 10.00 pM",
    registerClosesAt: "Friday 12.00 A.M",
  },
];

const pastEvents = [
  { image: "image 40.png", title: "Hult Prize", date: "16 Jan 2023" },
  { image: "image 40.png", title: "QZone", date: "16 Jan 2023" },
  { image: "image 40.png", title: "Mock IPl", date: "16 Jan 2023" },
];

const EventsPage = () => {
  return (
    <div className="flex overflow-hidden flex-col pb-5 bg-white">
      <div className="w-full border border-solid border-neutral-400 min-h-[1px] max-md:max-w-full" />
      <main className="flex flex-col px-4 mt-5 w-full max-md:max-w-full">
        <img
          loading="lazy"
          src="Group 3120.png"
          alt="Event banner"
          className="object-contain w-full rounded-none aspect-[1.95] max-md:max-w-full"
        />
        <section className="flex flex-col px-9 mt-16 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
          <h2 className="self-start mt-24 ml-5 text-4xl font-bold text-black tracking-[2.8px] max-md:mt-10 max-md:ml-2.5">
            Upcoming Events
          </h2>
          <div className="mt-10 max-md:mr-1 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
              {upcomingEvents.map((event, index) => (
                <div
                  key={index}
                  className="flex flex-col w-[33%] max-md:ml-5 max-md:w-full"
                >
                  <NavLink
                    to="/registrationPage"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    <EventCard {...event} />
                  </NavLink>
                </div>
              ))}
              <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex shrink-0 mx-auto max-w-full bg-white h-[432px] rounded-[40px] shadow-[4px_4px_25px_rgba(0,0,0,0.25)] w-[369px] max-md:mt-10" />
              </div>
            </div>
          </div>
          <div className=" flex shrink-0 self-center mx-auto mt-12 w-80 max-w-full h-2.5 bg-zinc-300 rounded-[40px] max-md:mt-10" />
        </section>
        <section className="flex flex-col px-9 mt-16 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
          <h2 className="self-start text-4xl font-bold text-black tracking-[2.8px] max-md:ml-2.5">
            Past Events
          </h2>
          <div className="mt-24 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
              {pastEvents.map((event, index) => (
                <div
                  key={index}
                  className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full"
                >
                  <NavLink
                    to="/pastEventDetails"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    <PastEventCard {...event} />
                  </NavLink>
                </div>
              ))}
            </div>
          </div>
          <div className="flex shrink-0 self-center mt-12 w-80 max-w-full h-2 bg-zinc-300 rounded-[40px] max-md:mt-10" />
        </section>
      </main>
      <img
        loading="lazy"
        src="Rectangle 501.png"
        alt=""
        className="object-contain mt-8 w-full aspect-[3.33] max-md:max-w-full"
      />
    </div>
  );
};

export default EventsPage;
