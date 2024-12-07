"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CiTwitter } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
// import CustomerCare from '@/components/customerCare';

const About = () => {
  return (
    <div>
      {/* <div>
        <Link href="#">Home/</Link>
        <Link href="/about">About</Link>
      </div>
      {/* content */}
      {/* /* <div className="h-[#336] w-[#525]">
        <h1>Our Story</h1>
        <p>
          Launced in 2015, Exclusive is South Asia’s premier online shopping
          makterplace with an active presense in Bangladesh. Supported by wide
          range of tailored marketing, data and service solutions, Exclusive has
          10,500 sallers and 300 brands and serves 3 millioons customers across
          the region. <br />
          Exclusive has more than 1 Million products to offer, growing at a very
          fast. Exclusive offers a diverse assotment in categories ranging from
          consumer.{" "}
        </p>
      </div>
      <div className="left-0">
        <Image src="/about.png" alt="about Image" width={705} height={609} />
           </div>  */}



<div className="flex flex-col md:flex-row items-center justify-between p-6">
  {/* Left Side: Text Content */}
  <div className="md:w-1/2 p-4">
    <div className="mb-4 ml-20">
      <Link href="/" className=" text-gray-900 hover:text-black hover:font-bold">Home/</Link>
      <Link href="/about" className=" text-gray-900 hover:text-black hover:font-bold">About</Link>
    </div>
    <div className="h-[525px] w-[336] m-24">
      <h1 className="text-4xl font-extrabold mb-4">Our Story</h1>
      <p className="text-gray-800 leading-relaxed">
        Launched in 2015, Exclusive is South Asia’s premier online shopping 
        marketplace with an active presence in Bangladesh. Supported by a wide 
        range of tailored marketing, data, and service solutions, Exclusive has 
        10,500 sellers and 300 brands and serves 3 million customers across the 
        region. <br />
        Exclusive has more than 1 million products to offer, growing very fast. 
        Exclusive offers a diverse assortment in categories ranging from consumer.
      </p>
    </div>
  </div>

  {/* Right Side: Image */}
  <div className="md:w-1/2 flex justify-center">
    <Image 
      src="/about.png" 
      alt="About Image" 
      width={705} 
      height={609} 
      className="rounded-lg hover:scale-105"
    />
  </div>
</div>



      {/* customer care section */}

      <div className="flex sm:grid-cols-1 md:grid-cols-3 gap-4 justify-items-center items-center p-6 bg-white ">
        {/* Card 1 */}

        <div className="m-4 hover:shadow-xl hover:scale-105 transition-transform item-center justify-center  content-center h-[161px] w-[256px] hover:bg-[#DB4444] rounded-lg hover:text-white border-2 border-solid border-gray-200">
          <Image
            src="/a1.png"
            alt="Free and Fast Delivery"
            width={80}
            height={80}
            className="m-auto"
          />
          {/* </div> */}
          <h5 className="text-black font-bold mb-2 text-center">
            10.5K
          </h5>
          <p className="text-black font-medium text-center">
            Free delivery for all orders over $140
          </p>
        </div>

        {/* Card 2 */}

        <div className="m-4 hover:shadow-xl hover:scale-105 transition-transform item-center justify-center  content-center h-[161px] w-[256px] hover:bg-[#DB4444] rounded-lg hover:text-white border-2 border-solid border-gray-200">
          <Image
            src="/a2.png"
            alt="Free and Fast Delivery"
            width={80}
            height={80}
            className="m-auto"
          />
          {/* </div> */}
          <h5 className="text-black font-bold mb-2 text-center">
           33K
          </h5>
          <p className="text-black font-medium text-center">
            Free delivery for all orders over $140
          </p>
        </div>

        {/* Card 3 */}
        <div className="m-4 hover:shadow-xl hover:scale-105 transition-transform item-center justify-center  content-center h-[161px] w-[256px] hover:bg-[#DB4444] rounded-lg hover:text-white border-2 border-solid border-gray-200">
          <Image
            src="/a3.png"
            alt="Free and Fast Delivery"
            width={80}
            height={80}
            className="m-auto"
          />
          {/* </div>  */}
          <h5 className="text-black font-bold mb-2 text-center">
          45.5K
          </h5>
          <p className="text-black font-medium text-center">
            Free delivery for all orders over $140
          </p>
        </div>
        {/* Card 4*/}
        <div className="m-4 hover:shadow-xl hover:scale-105 transition-transform item-center justify-center  content-center h-[161px] w-[256px] hover:bg[#DB4444] hover:bg-[#DB4444] rounded-lg hover:text-white border-2 border-solid border-gray-200">
          <Image
            src="/s3.png"
            alt="Free and Fast Delivery"
            width={80}
            height={80}
            className="m-auto"
          />
          {/* </div>  */}
          <h5 className="text-black font-bold mb-2 text-center">
           25K
          </h5>
          <p className="text-black font-medium text-center">
            Free delivery for all orders over $140
          </p>
        </div>
      </div>



{/* review */}

<div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4 justify-items-center items-center p-6 bg-white m-10">
  {/* Card 1 */}
  <div className="m-4  hover:scale-105 transition-transform flex flex-col items-center justify-center h-[370px] w-[564px]">
    <Image src="/r3.png" alt="People reviews" width={370} height={430} />
    <h2 className="text-lg font-bold mt-4">Tom Cruise</h2>
    <p className="text-gray-500">Founder and Chairman</p>
    {/* Social links */}
    <div className="flex space-x-4 mt-2 text-xl">
      <CiTwitter />
      <CiInstagram />
      <CiLinkedin />
    </div>
  </div>

  {/* Card 2 */}
  <div className="m-4 hover:scale-105 transition-transform flex flex-col items-center justify-center h-[370px] w-[564px]">
    <Image src="/r2.png" alt="People reviews" width={370} height={430} />
    <h2 className="text-lg font-bold mt-4">Tom Cruise</h2>
    <p className="text-gray-500">Founder and Chairman</p>
    {/* Social links */}
    <div className="flex space-x-4 mt-2 text-xl">
      <CiTwitter />
      <CiInstagram />
      <CiLinkedin />
    </div>
  </div>

  {/* Card 3 */}
  <div className="m-4  hover:scale-105 transition-transform flex flex-col items-center justify-center h-[370px] w-[564px]">
    <Image src="/r1.png" alt="People reviews" width={370} height={430} />
    <h2 className="text-lg font-bold mt-4">Tom Cruise</h2>
    <p className="text-gray-500">Founder and Chairman</p>
    {/* Social links */}
    <div className="flex space-x-4 mt-2 text-xl">
      <CiTwitter />
      <CiInstagram />
      <CiLinkedin />
    </div>
  </div>
</div>




 {/* CustomerCare */}

<div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center items-center p-6 bg-white ">
      {/* Card 1 */}
    
        <div className="m-4 hover:shadow-xl hover:scale-105 transition-transform item-center justify-center  content-center h-[161px] w-[256px]">
          <Image src="/s1.png" alt="Free and Fast Delivery" width={80} height={80} className='m-auto'/>
        {/* </div> */}
        <h5 className="text-black font-bold mb-2 text-center">FREE AND FAST DELIVERY</h5>
        <p className="text-black font-medium text-center">Free delivery for all orders over $140</p>
      </div>

      {/* Card 2 */}
     
      <div className="m-4 hover:shadow-xl hover:scale-105 transition-transform item-center justify-center  content-center h-[161px] w-[256px]">
          <Image src="/s2.png" alt="Free and Fast Delivery" width={80} height={80} className='m-auto'/>
        {/* </div> */}
        <h5 className="text-black font-bold mb-2 text-center">FREE AND FAST DELIVERY</h5>
        <p className="text-black font-medium text-center">Free delivery for all orders over $140</p>
      </div>

      {/* Card 3 */}
      <div className="m-4 hover:shadow-xl hover:scale-105 transition-transform item-center justify-center  content-center h-[161px] w-[256px]">
          <Image src="/s3.png" alt="Free and Fast Delivery" width={80} height={80} className='m-auto'/>
        {/* </div> */}
        <h5 className="text-black font-bold mb-2 text-center">FREE AND FAST DELIVERY</h5>
        <p className="text-black font-medium text-center">Free delivery for all orders over $140</p>
      </div>
</div>
</div>

  );
};

export default About;
