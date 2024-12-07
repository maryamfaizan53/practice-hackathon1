// 'use client';
// import React from "react";
// import { BiRightArrow } from "react-icons/bi";
// import Image from "next/image";

// export default function Footer() {
//   const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const emailInput = (e.target as HTMLFormElement).email.value;
//     if (!emailInput || !/\S+@\S+\.\S+/.test(emailInput)) {
//       alert("Please enter a valid email address.");
//     } else {
//       alert("Subscribed successfully!");
//     }
//   };

//   return (
//     <footer className="bg-black text-center items-center gap-6 text-white py-8 px-4 flex flex-wrap justify-center content-center h-[440px] w-full">
//       {/* Subscribe Section */}
//       <div className="flex-1 min-w-[200px] mb-6">
//       <h3 className="text-3xl font-extrabold mb-8">Exclusive</h3>
//         <h4 className="text-lg font-bold mb-8">Subscribe</h4>
//         <p className="mb-4 font-extralight">Get 10% off your first order</p>
//         <div className="bg-black focus:ring-2 ring-2 ring-gray-700 ">
//         <form className="flex items-center" onSubmit={handleSubscribe}>
//           <input
//             type="email"
//             name="email"
//             placeholder="Enter your email "
//             className="w-4/5 p-2 rounded-l-md text-gray-400 bg-black"></input>
        


//           <button
//             type="submit"
//             className="bg-black text-gray-300 px-4 py-2 rounded-r-md"
//           >
//            <BiRightArrow />
//           </button>
//         </form>
//         </div>
//       </div>

//       {/* Support Section */}
//       <div className="flex-1 min-w-[200px] mb-6">
//         <h3 className="text-lg font-semibold mb-6">Support</h3>
//         <ul>
//           <li>
//             <a href="#" className="hover:text-gray-400">
//             111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.
//             </a>
//           </li>
//           <li>
//             <a href="#" className="hover:text-gray-400">
//             exclusive@gmail.com
//             </a>
//           </li>
//           <li>
//             <a href="#" className="hover:text-gray-400">
//             exclusive@gmail.com
//             </a>
//           </li>
//         </ul>
//       </div>

//       {/* Account Section */}
//       <div className="flex-1 min-w-[200px] mb-6">
//         <h3 className="text-lg font-semibold mb-6">Account</h3>
//         <ul>
//           <li>
//             <a href="#" className="hover:text-gray-400">
//             My Account
//             </a>
//           </li>
//           <li>
//             <a href="#" className="hover:text-gray-400">
//            Login/Register
//             </a>
//           </li>
//           <li>
//             <a href="#" className="hover:text-gray-400">
//               Cart
//             </a>
//           </li>
//           <li>
//             <a href="#" className="hover:text-gray-400">
//               Wishlist
//             </a>
//           </li>
//           <li>
//             <a href="#" className="hover:text-gray-400">
//              Shop
//             </a>
//           </li>
//         </ul>
//       </div>

//       {/* Quick Links Section */}
//       <div className="flex-1 min-w-[200px] mb-6">
//         <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
//         <ul>
//           <li>
//             <a href="#" className="hover:text-gray-400">
//               Privacy Policy
//             </a>
//           </li>
//           <li>
//             <a href="#" className="hover:text-gray-400">
//               Terms of Use
//             </a>
//           </li>
//           <li>
//             <a href="#" className="hover:text-gray-400">
//               FAQ
//             </a>
//           </li>
//           <li>
//             <a href="#" className="hover:text-gray-400">
//            Contact
//             </a>
//           </li>
//         </ul>
//       </div>

//       {/* Download Section */}
//       <div className="flex-1 min-w-[200px] mb-6">
//         <h3 className="text-lg font-semibold mb-6 mt-16">Download App</h3>
//         <p className="mb-4">Save $3 with App New User Only</p>
       
//         <ul>
//         <li>
//             <a href="#" className="hover:text-gray-400">
//            <Image src="/footer.png" alt="Scan" width={198} height={84} />
//             </a>
//           </li>
          
//           <li>
//             <a href="#" className="hover:text-gray-400 mt-4">
//              <Image src="/footer2.png" alt="social icons" width={168} height={24} />
//             </a>
//           </li>
//         </ul>
//       </div>
// <div>
//   <h3 className="text-gray-500 font-semibold m-10">Copyright 2024. All right reserved | Maryam faizan 130501</h3></div>

//     </footer>
//   );
// }
'use client';
import React from "react";
import { BiRightArrow } from "react-icons/bi";
import Image from "next/image";

export default function Footer() {
  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const emailInput = (e.target as HTMLFormElement).email.value;
    if (!emailInput || !/\S+@\S+\.\S+/.test(emailInput)) {
      alert("Please enter a valid email address.");
    } else {
      alert("Subscribed successfully!");
    }
  };

  return (
    <footer className="bg-black text-white py-8 px-4 flex justify-between items-start flex-wrap gap-8 h-[440px] w-full pt-20">
     
      {/* Subscribe Section */}
      <div className="flex-1 min-w-[200px]">
        <h3 className="text-3xl font-extrabold mb-4">Exclusive</h3>
        <h4 className="text-lg font-bold mb-4">Subscribe</h4>
        <p className="mb-4 font-extralight">Get 10% off your first order</p>
        <form
          className="flex items-center bg-black border border-gray-700 rounded-md"
          onSubmit={handleSubscribe}
        >
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="w-4/5 p-2 rounded-l-md text-gray-400 bg-black focus:outline-none"
          />
          <button
            type="submit"
            className="bg-black text-gray-300 px-4 py-2 rounded-r-md"
          >
            <BiRightArrow />
          </button>
        </form>
      </div>

      {/* Support Section */}
      <div className="flex-1 min-w-[200px]">
        <h3 className="text-lg font-semibold mb-4">Support</h3>
        <ul>
          <li>
            <a href="#" className="hover:text-gray-400">
              111 Bijoy Sarani, Dhaka, DH 1515, Bangladesh.
            </a>
          </li>
          <li>
            <a href="mailto:exclusive@gmail.com" className="hover:text-gray-400">
              exclusive@gmail.com
            </a>
          </li>
        </ul>
      </div>

      {/* Account Section */}
      <div className="flex-1 min-w-[200px]">
        <h3 className="text-lg font-semibold mb-4">Account</h3>
        <ul>
          <li>
            <a href="#" className="hover:text-gray-400">
              My Account
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400">
              Login/Register
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400">
              Cart
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400">
              Wishlist
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400">
              Shop
            </a>
          </li>
        </ul>
      </div>

      {/* Quick Links Section */}
      <div className="flex-1 min-w-[200px]">
        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
        <ul>
          <li>
            <a href="#" className="hover:text-gray-400">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400">
              Terms of Use
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400">
              FAQ
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400">
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Download Section */}
      <div className="flex-1 min-w-[200px]">
        <h3 className="text-lg font-semibold mb-4">Download App</h3>
        <p className="mb-4">Save $3 with App New User Only</p>
        <ul>
          <li className="mb-4">
            <a href="#" className="hover:text-gray-400">
              <Image src="/footer.png" alt="Scan" width={198} height={84} />
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400">
              <Image
                src="/footer2.png"
                alt="Social icons"
                width={168}
                height={24}
              />
            </a>
          </li>
        </ul>
      </div>

      {/* Footer Bottom */}
      <div className="w-full text-center mt-8">
        <h3 className="text-gray-500 font-semibold">
          Copyright 2024. All rights reserved | Maryam Faizan 130501
        </h3>
      </div>
   
    </footer>
  );
}
