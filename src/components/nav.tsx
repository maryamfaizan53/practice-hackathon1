// 'use client';
// import React from 'react';
// import { RiArrowDropDownLine } from "react-icons/ri";
// import Link from 'next/link';
// import { IoIosSearch } from "react-icons/io";
// import { FaRegHeart } from "react-icons/fa";
// import { HiOutlineShoppingCart } from "react-icons/hi2";
// import { FaRegCircleUser } from "react-icons/fa6";

// const Nav = () => {
//   return (
//     <div>
//       {/* First Navbar */}
//       <div className="bg-black h-[48px] w-screen flex items-center justify-center text-sm text-white gap-2">
//         <h5>
//           Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{' '}
//           <span className="underline cursor-pointer hover:font-bold">Shop Now</span>
//         </h5>
//         <div className="flex items-center ml-4">
//           <h6 className="flex items-center gap-1">
//             English <RiArrowDropDownLine />
//           </h6>
//         </div>
//       </div>

//       {/* Second Navbar */}
//       <div className="bg-white border-b-2 border-gray-200 w-full h-20 flex items-center justify-between px-8">
//         {/* Logo */}
//         <div className="flex-shrink-0 ml-20">
//           <h2 className="text-3xl font-bold text-black">Exclusive</h2>
//         </div>

//         {/* Navigation Links */}
//         <ul className="flex gap-8 text-lg font-medium ">
//           <Link href="/"><li className="cursor-pointer hover:text-gray-500 hover:font-extrabold">Home</li></Link>
//           <Link href="/"><li className="cursor-pointer hover:text-gray-500 hover:font-extrabold">Contact</li></Link>
//           <Link href="/"><li className="cursor-pointer hover:text-gray-500 hover:font-extrabold">About</li></Link>
//           <Link href="/"><li className="cursor-pointer hover:text-gray-500 hover:font-extrabold">SignUp</li></Link>
//         </ul>

//         {/* Search Bar and Icons */}
//         <div className="flex items-center gap-6">
//           {/* Search Bar */}
//           <div className="relative">
//             <input
//               type="search"
//               placeholder="What are you looking for?"
//               className="focus:ring-2 focus:ring-gray-400 border border-gray-500 bg-[#F5F5F5] p-2 rounded-md w-72"
//             />
//             <IoIosSearch className="absolute top-3 right-3 text-gray-600" />
//           </div>

//           {/* Icons */}
//           <div className="flex items-center gap-6 text-xl text-gray-900">
//             <FaRegHeart className="cursor-pointer hover:text-[#DB4444]" />
//             <HiOutlineShoppingCart className="cursor-pointer hover:text-[#DB4444]" />
//             <FaRegCircleUser  className="rounded-full text-white bg-[#DB4444] cursor-pointer hover:text-black" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Nav;



// 'use client';

// import { useState } from 'react';

// const Dropdown = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="relative inline-block text-left">
//       {/* Dropdown Button */}
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
//       >
//         Options
//         <svg
//           className="-mr-1 ml-2 h-5 w-5"
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 20 20"
//           fill="currentColor"
//           aria-hidden="true"
//         >
//           <path
//             fillRule="evenodd"
//             d="M5.293 9.707a1 1 0 010-1.414L9.586 4.586a1 1 0 011.414 0l4.293 4.293a1 1 0 01-1.414 1.414L10 7.414l-3.293 3.293a1 1 0 01-1.414 0z"
//             clipRule="evenodd"
//           />
//         </svg>
//       </button>

//       {/* Dropdown Menu */}
//       {isOpen && (
//         <div className="absolute right-0 mt-2 w-56 origin-top-right rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
//           <div className="py-1">
//             <a
//               href="#action1"
//               className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//             >
//               Action 1
//             </a>
//             <a
//               href="#action2"
//               className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//             >
//               Action 2
//             </a>
//             <a
//               href="#action3"
//               className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//             >
//               Action 3
//             </a>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Dropdown;


'use client';
import React, { useState } from 'react';
import { RiArrowDropDownLine } from "react-icons/ri";
import Link from 'next/link';
import { IoIosSearch } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { FaRegCircleUser } from "react-icons/fa6";

const Nav = () => {
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);

  return (
    <div>
      {/* First Navbar */}
      <div className="bg-black h-[48px] w-screen flex items-center justify-center text-sm text-white gap-2 relative">
        <h5>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{' '}
          <span className="underline cursor-pointer hover:font-bold">Shop Now</span>
        </h5>
        <div className="flex items-center ml-4 relative">
          <h6
            className="flex items-center gap-2 ml-64 cursor-pointer"
            onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
          >
            English <RiArrowDropDownLine />
          </h6>
          {isLanguageDropdownOpen && (
            <div className="absolute top-8 right-0 mt-0 w-40 bg-black opacity-70 rounded-md shadow-lg z-50">
              <ul className="py-1">
                <li className="px-4 py-2 text-sm text-gray-100 hover:bg-gray-700">Arabic</li>
                <li className="px-4 py-2 text-sm text-gray-100 hover:bg-gray-700">Spanish</li>
                <li className="px-4 py-2 text-sm text-gray-100 hover:bg-gray-700">French</li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Second Navbar */}
      <div className="bg-white border-b-2 border-gray-200 w-full h-20 flex items-center justify-between px-8">
        {/* Logo */}
        <div className="flex-shrink-0 ml-20">
          <h2 className="text-3xl font-bold hover:text-[#DB4444]  text-black">Exclusive</h2>
        </div>

        {/* Navigation Links */}
        <ul className="flex gap-8 text-lg font-medium">
          <Link href="/"><li className="cursor-pointer hover:text-[#DB4444] hover:font-extrabold">Home</li></Link>
          <Link href="/contact"><li className="cursor-pointer hover:text-[#DB4444] hover:font-extrabold">Contact</li></Link>
          <Link href="/about"><li className="cursor-pointer hover:text-[#DB4444] hover:font-extrabold">About</li></Link>
          <Link href="/signup"><li className="cursor-pointer hover:text-[#DB4444] hover:font-extrabold">SignUp</li></Link>
        </ul>

        {/* Search Bar and Icons */}
        <div className="flex items-center gap-6">
          {/* Search Bar */}
          <div className="relative">
            <input
              type="search"
              placeholder="What are you looking for?"
              className="focus:ring-2 focus:ring-gray-400 border border-gray-500 bg-[#F5F5F5] p-2 rounded-md w-72"
            />
            <IoIosSearch className="absolute top-3 right-3 text-gray-600" />
          </div>

          {/* Icons */}
          <div className="flex items-center gap-6 text-xl text-gray-900 relative">
            <FaRegHeart className="cursor-pointer hover:text-[#DB4444] hover:font-extrabold" />
            <HiOutlineShoppingCart className="cursor-pointer hover:text-[#DB4444] hover:font-extrabold" />

            {/* User Icon with Dropdown */}
            <div className="relative">
              <FaRegCircleUser
                className="rounded-full text-white bg-[#DB4444] cursor-pointer hover:font-extrabold hover:text-black"
                onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
              />
              {isUserDropdownOpen && (
                <div className="absolute right-0 mt-0 w-64 bg-black opacity-70 rounded-md shadow-lg z-50">
                  <ul className="py-1">
                    <li className="px-4 py-2 text-sm text-gray-100 hover:bg-gray-700">
                      <Link href="/profile">Manage My Account</Link>
                    </li>
                    <li className="px-4 py-2 text-sm text-gray-100 hover:bg-gray-700">
                      <Link href="/settings">My Orders</Link>
                    </li>
                    <li className="px-4 py-2 text-sm text-gray-100 hover:bg-gray-700">
                      <Link href="/logout">My Cancellations</Link>
                    </li>
                    <li className="px-4 py-2 text-sm text-gray-100 hover:bg-gray-700">
                      <Link href="/logout">My Reviews</Link>
                    </li>
                    <li className="px-4 py-2 text-sm text-gray-100 hover:bg-gray-700">
                      <Link href="/logout">My Cancellations</Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;


