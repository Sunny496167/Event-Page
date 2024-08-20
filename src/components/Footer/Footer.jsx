import React from "react";

function Footer () {
	return(
    <div className="flex overflow-hidden flex-col pt-8 pb-5 bg-white">
      <footer className="self-center mt-12 ml-7 w-full max-w-[1081px] max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-1/5 max-md:ml-0 max-md:w-full">
              <img loading="lazy" src="Artboard 22@10x.png" alt="" className="object-contain shrink-0 max-w-full aspect-[3.65] w-[175px] max-md:mt-10" />
            </div>
            <div className="flex flex-col ml-5 w-4/5 max-md:ml-0 max-md:w-full">
              <div className="grow max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col">
                  <div className="flex flex-col w-[72%] max-md:ml-0 max-md:w-full">
                    <img loading="lazy" src="image 6.png" alt="" className="object-contain mr-0 w-full aspect-[2.67] max-md:max-w-full" />
                  </div>
                  <div className="flex flex-col ml-5 w-[28%] max-md:ml-0 max-md:w-full">
                    <img loading="lazy" src="image 7.png" alt="" className="object-contain grow mt-44 aspect-[2.35] w-[221px] max-md:mt-10" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
    </div>
		
		)
}
export default Footer;