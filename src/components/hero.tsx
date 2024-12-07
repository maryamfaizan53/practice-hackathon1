"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-stretch gap-4 p-4">
      {/* Left Section: Links */}
      <div className="hidden md:block w-fit md:w-3/4 bg-gray-100 p-4 rounded-lg">
        <ul className="space-y-3 text-gray-800">
          {[
            "Women's Fashion",
            "Men's Fashion",
            "Electronics",
            "Home & Lifestyle",
            "Medicine",
            "Sports & Outdoor",
            "Baby's & Toys",
            "Groceries & Pets",
            "Health & Beauty",
          ].map((category, index) => (
            <li
              key={index}
              className="flex justify-between items-center cursor-pointer hover:text-black"
            >
              {category}
              <span className="text-gray-500 text-sm">›</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Section: Image Slider */}
      <div className="w-full md:w-3/4">
        <Swiper
          spaceBetween={30}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop
        >
          {/* Slider Images */}
          {[
            "/hero2.png", 
            "/hero2.png",
            "/hero2.png",
          ].map((src, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden">
                <Image
                  src={src}
                  alt={`Slide ${index + 1}`}
                  layout="fill"
                  objectFit="inherit"
                  className="rounded-lg"
                />
              </div>
             
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Hero;
