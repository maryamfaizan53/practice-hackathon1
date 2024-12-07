'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from "react-icons/fa";

const FlashSales = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date().setHours(23, 59, 59, 999); // End of the day
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const products = [
    {
      id: 1,
      image: '/t1.png',
//    <Image src="src" alt="alt" width={} height={} />
      name: 'HAVIT HV-G92 Gamepad',
      price: 120,
      originalPrice: 160,
      discount: 40,
      reviews: 88,
      rating: 4.5,
    },
    {
      id: 2,
      image: '/t2.png',
      name: 'AK-900 Wired Keyboard',
      price: 960,
      originalPrice: 1160,
      discount: 35,
      reviews: 75,
      rating: 4.2,
    },
    {
      id: 3,
      image: '/t3.png',
      name: 'IPS LCD Gaming Monitor',
      price: 370,
      originalPrice: 400,
      discount: 30,
      reviews: 99,
      rating: 4.8,
    },
    {
      id: 4,
      image: '/t4.png',
      name: 'S-Series Comfort Chair',
      price: 375,
      originalPrice: 400,
      discount: 25,
      reviews: 99,
      rating: 4.7,
    },
  




  ];

  return (
    <div className="container mx-auto py-8">
        <div className=" items-center m-4 flex ml-2">
          <div className="bg-[#DB4444] h-8 w-4 rounded-lg mr-2"></div>
          <h5 className="text-sm  font-semibold text-[#DB4444]  ">Todays</h5> <br /></div>
       <div className="mb-8">
       <h3 className="text-4xl font-semibold text-gray-800 ml-2 relative">Flash Sale</h3>
     
       <div className="flex justify-center gap-4 m-2 right-40  absolute">
          <FaRegArrowAltCircleLeft className="text-2xl text-[#817979] hover:text-[#DB4444] cursor-pointer" />
          <FaRegArrowAltCircleRight className="text-2xl text-[#827474] hover:text-[#DB4444]  cursor-pointer" />
        </div>
        </div>
      {/* Header Section */}
      {/* <div className="">
        <span className='text-[#DB4444]'>Todays</span>
        <h2 className="text-3xl font-bold mb-4"> Flash Sales</h2> */}
        <div className="flex justify-center gap-4 text-lg font-medium">
          <div className="text-center">
            <span className="text-2xl font-bold">{timeLeft.days}</span> Days
          </div>
          <div className="text-center">
            <span className="text-2xl font-bold">{timeLeft.hours}</span> Hours
          </div>
          <div className="text-center">
            <span className="text-2xl font-bold">{timeLeft.minutes}</span> Minutes
          </div>
          <div className="text-center">
            <span className="text-2xl font-bold">{timeLeft.seconds}</span> Seconds
          </div>
        </div>
      {/* </div> */}

     
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
        {products.map((product) => (
        <div
        key={product.id}
        className="border rounded-lg shadow-lg p-4 flex flex-col items-center relative hover:shadow-xl hover:scale-105 transition-transform"
      >
            <div className="absolute top-2 left-2 bg-[#DB4444] text-white text-sm px-2 py-1 rounded">
              -{product.discount}%
            </div>
            <Image
              src={product.image}
              alt={product.name}
              width={270}
              height={250}
              className="object-contain mb-4 bg-[#F5F5F5]"
            />
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="mt-2 text-[#DB4444]font-bold text-lg">
              ${product.price}{' '}
              <span className="text-gray-500 line-through">${product.originalPrice}</span>
            </p>
            <div className="mt-2 text-yellow-500">
              {'★'.repeat(Math.floor(product.rating))}
              <span className="text-gray-500 text-sm"> ({product.reviews})</span>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="text-center mt-8">
        <button className="bg-[#DB4444] text-white px-6 py-2 rounded-lg shadow-lg hover:bg-red-600 transition">
          View All Products
        </button>
      </div>
    </div>
    // </div>
  );
};

export default FlashSales;
