import React from "react";
import Timeline from "./Timeline";
import EventDetails from "./EventDetails";
import RegisterSection from "./RegisterSection";

function RegistrationPage (){
	return (
		<div className="flex overflow-hidden flex-col max-md:pb-24">
		  <hr className="w-full border border-solid border-neutral-400 min-h-[1px] max-md:max-w-full" />
		  <main className="flex flex-col items-start pl-12 mt-12 w-full max-md:pl-5 max-md:mt-10 max-md:max-w-full">
			<div className="self-stretch max-md:max-w-full">
			  <div className="flex gap-5 max-md:flex-col">
				<EventDetails />
				<RegisterSection />
			  </div>
			</div>
			<Timeline />
		  </main>
		  <img loading="lazy" src="Rectangle 501.png" alt="" className="object-contain mt-8 w-full aspect-[3.33] max-md:max-w-full" />
		</div>
	  );
	}
	
export default RegistrationPage;