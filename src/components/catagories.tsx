'use client'

import React from "react";
import { FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from "react-icons/fa";
import Image from "next/image";

const Categories = () => {
  return (
    <div className="bg-white py-8">
      {/* Header Section
      <div className="flex text-center mb-6">
        <h5 className="text-[#DB4444] font-bold text-lg top-10 ml-28">Categories</h5>
        <h2 className="text-3xl font-bold">Browse By Category</h2>
        <div className="flex justify-center gap-4 mt-4">
          <FaRegArrowAltCircleLeft className="text-2xl text-[#DB4444] cursor-pointer" />
          <FaRegArrowAltCircleRight className="text-2xl text-[#DB4444] cursor-pointer" />
        </div>
      </div> */}
         {/* Header Section */}
        {/* Header */}
        <div className=" items-center m-4 flex ml-28">
          <div className="bg-[#DB4444] h-8 w-4 rounded-lg mr-2"></div>
          <h5 className="text-sm  font-semibold text-[#DB4444] ">Catagories</h5> <br /></div>
       <div className="mb-8">
       <h3 className="text-4xl font-semibold text-gray-800 ml-28 relative">Browse By Catagory</h3>
     
       <div className="flex justify-center gap-4 m-2 right-40  absolute">
          <FaRegArrowAltCircleLeft className="text-2xl text-[#817979] hover:text-[#DB4444] cursor-pointer" />
          <FaRegArrowAltCircleRight className="text-2xl text-[#827474] hover:text-[#DB4444]  cursor-pointer" />
        </div>
        </div>

      {/* Categories Grid */}
      <div className="container flex mt-16 ">
        <ul className="relative flex flex-row sm:grid-cols-3 md:grid-cols-4 gap-0 space-x-8 justify-evenly left-28">
          <li>
            <Image
              src="/c1.png"
              alt="Category"
              width={170}
              height={145}
              className="  hover:bg-[#DB4444]"
            />
          </li>
          <li>
            <Image
              src="/c2.png"
              alt="Category"
              width={170}
              height={145}
              className="  hover:bg-[#DB4444]"
            />
          </li>
          <li>
            <Image
              src="/c3.png"
              alt="Category"
              width={170}
              height={145}
              className=" hover:bg-[#DB4444]"
            />
          </li>
          <li>
            <Image
              src="/c1.png"
              alt="Category"
              width={170}
              height={145}
              className=" hover:bg-[#DB4444]"
            />
          </li>
          <li>
            <Image
              src="/c5.png"
              alt="Category"
              width={170}
              height={145}
              className=" hover:bg-[#DB4444]"
            />
          </li>
          <li>
            <Image
              src="/c6.png"
              alt="Category"
              width={170}
              height={145}
              className=" hover:bg-[#DB4444]"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Categories;



// import React from 'react'
// import { FaRegArrowAltCircleLeft } from "react-icons/fa";
// import { FaRegArrowAltCircleRight } from "react-icons/fa";

// const Catagories = () => {
//   return (
//     <div className='bg-white'>
//         <div className='w-20 h-40 bg-[#DB4444]'>
//             <h5 className='text-[#DB4444] font-bold'>Catagories</h5>
//         <h2 className='text-3xl font-bold mb-4'>Browse By Catagory</h2>
//         <div><FaRegArrowAltCircleLeft />
//         <FaRegArrowAltCircleRight />
//         </div>
// </div>

// <div>
//     <ul className='flex flex-col gap-2'>
//     <Image src="/c1.png" alt="catagory" width={170} height={145} />
//     <Image src="/c2.png" alt="catagory" width={170} height={145} />
//     <Image src="/c3.png" alt="catagory" width={170} height={145} />
//     <Image src="/c4.png" alt="catagory" width={170} height={145} />
//     <Image src="c5.png" alt="catagory" width={170} height={145} />
//     <Image src="c6.png" alt="catagory" width={170} height={145} />
//     </ul>
// </div>

//     </div>
    
//   )
// }

// export default Catagories