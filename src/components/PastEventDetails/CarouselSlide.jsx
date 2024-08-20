import React, { useState, useEffect } from "react";

const images = [
  "Group 3120.png",
  "https://www.visualsstock.com/images/Low/4/AK55122.jpg",
  "https://thumbs.dreamstime.com/b/group-college-girls-9332043.jpg",
  "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2014/06/29/101798768-india_students_2.1910x1000.jpg",
  
];

function CarouselSlide() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const imagesWithClones = [
    images[images.length - 1],
    ...images,
    images[0],
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  const handleNext = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const handleTransitionEnd = () => {
    setIsTransitioning(false);

    if (currentIndex === 0) {
      setCurrentIndex(images.length);
    }

    if (currentIndex === images.length + 1) {
      setCurrentIndex(1);
    }
  };

  return (
    <section className="relative mt-24 w-full max-w-5xl mx-auto text-center">
      <div className="overflow-hidden rounded-lg shadow-lg">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transitionDuration: isTransitioning ? "500ms" : "0ms",
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {imagesWithClones.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index}`}
              className="w-[1200px] h-[500px] flex-shrink-0 mx-auto"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CarouselSlide;
