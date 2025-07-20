import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const BgImageSlider = ({ images = [], autoSlide = true, interval = 7000 }) => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {

    console.log(images)
    if (!autoSlide) return;
    const slider = setInterval(nextSlide, interval);
    return () => clearInterval(slider);
  }, [current, autoSlide, interval]);

  if (images.length === 0) return null;

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {images.map((img, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      ))}

      {/* Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 rounded-full p-2 z-20"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 rounded-full p-2 z-20"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>
    </div>
  );
};

export default BgImageSlider;
