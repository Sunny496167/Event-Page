import React from "react";
import TeamSection from "./TeamSection";
import CarouselSlide from "./CarouselSlide";
import HultPrize from "./HultPrize";

function PastEventDetails() {
  return (
    <div className="flex overflow-hidden flex-col pt-8  bg-white">
      <main>
	  <HultPrize/>
        <CarouselSlide />
        <section className="flex flex-col items-center pl-8 w-full max-md:pl-5 max-md:max-w-full">
          <div className="mt-10 w-full max-w-[1147px] max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex shrink-0 mx-auto max-w-full bg-zinc-300 h-[624px] w-[518px] max-md:mt-8">
                  <img src="https://thumbs.dreamstime.com/b/two-indian-students-studying-campus-26973740.jpg" alt="" />
                </div>
              </div>
              <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow max-md:mt-8 max-md:max-w-full">
                  <div className="flex shrink-0 bg-zinc-300 h-[312px] max-md:max-w-full">
                    <img src="https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2014/06/29/101798768-india_students_2.1910x1000.jpg" alt="" />
                  </div>
                  <div className="flex shrink-0 mt-10 bg-zinc-300 h-[272px] max-md:max-w-full">
                    <img src="https://thumbs.dreamstime.com/b/group-college-girls-9332043.jpg"/>
                    </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex shrink-0 mt-10 max-w-full bg-zinc-300 h-[543px] w-[1153px]">
            <img src="https://www.visualsstock.com/images/Low/4/AK55122.jpg" alt="cover" className="object-cover h-full w-full"/>
            </div>
          <TeamSection title="Winners" teamName="Team Synopsis" />
          <TeamSection title="1st Runner up" teamName="Team Genesis" />
        </section>
      </main>
	  <img loading="lazy" src="Rectangle 501.png" alt="" className="object-contain mt-8 w-full aspect-[3.33] max-md:max-w-full" />
    </div>
  );
}

export default PastEventDetails;