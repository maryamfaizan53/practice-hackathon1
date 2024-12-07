// "use client";

// import React from "react";
// import Image from "next/image";
// import Link from "next/link";

// const Signup = () => {
//   return (
//     <div className="mr-0 flex">
//       <div className="w-[1305px] h-[781px] gap-[129px]">
//         <Image src="/login.png" alt="login page picture" width={805} height={781} />

//         <h1 className="font-bold ">Create an account</h1>
//         <p className="text-gray-500">Enter Your details below</p>
//       </div>

//       {/* form */}

//       <form>
//         <div className="flex flex-col items-start gap-y-3">
//           <input
//             type="text"
//             id="id"
//             name="name"
//             placeholder="Name"
//             className="w-full p-4 bg-transparent border border-b border-gray-200 rounded-lg outline-none"
//           />
//         </div>
//         <div className="flex flex-col items-start gap-y-3">
//           <input
//             type="email"
//             id="id"
//             name="email"
//             placeholder="Email or phone Number"
//             className="w-full p-4 bg-transparent border border-b border-gray-200 rounded-lg outline-none"
//           />
//         </div>

//         <div className="flex flex-col items-start gap-y-3">
//           <input
//             type="password"
//             id="id"
//             name="password"
//             placeholder="Enter Your Password"
//             className="w-full p-4 bg-transparent border border-b border-gray-200 rounded-lg outline-none"
//           />
//         </div>

//         <button
//           type="submit"
//           className=" w-full text-black bg-white hover:bg-[#DB4444] hover:text-white"
//         >
//           Create your Account
//         </button>
//         <button
//           type="submit"
//           className="w-full text-black bg-white hover:bg-[#DB4444] hover:text-white"
//         >
//           SignUp with Google
//         </button>
//         <div>
//           <p>Already have Account?</p>
//           <Link
//             href="/login"
//             className=" text-gray-900 hover:text-black underline hover:font-bold"
//           >
//             login
//           </Link>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Signup;


"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Signup = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between min-h-screen p-6">
      {/* Left Side: Image */}
      <div className="md:w-1/2 flex justify-center">
        <Image
          src="/login.png"
          alt="Signup page picture"
          width={805}
          height={781}
          className="rounded-lg"
        />
      </div>

      {/* Right Side: Form */}
      <div className="md:w-1/2 flex flex-col items-center justify-center p-6">
        <h1 className="text-2xl font-bold mb-4">Create an Account</h1>
        <p className="text-gray-500 mb-6">Enter your details below</p>

        <form className="w-full max-w-md space-y-4">
          {/* Name Input */}
          <div>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="w-full p-4 bg-transparent border-b border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Email Input */}
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email or Phone Number"
              className="w-full p-4 bg-transparent border-b border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Password Input */}
          <div>
            <input
              type="password"
              name="password"
              placeholder="Enter Your Password"
              className="w-full p-4 bg-transparent border-b border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-3">
            <button
              type="submit"
              className="w-full py-3 bg-[#DB4444] text-white rounded-lg hover:bg-red-600 transition"
            >
              Create Your Account
            </button>
            <button
              type="button"
              className="w-full py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition"
            >
              Sign Up with Google
            </button>
          </div>
        </form>

        <p className="text-gray-500 mt-4">
          Already have an account?{" "}
          <Link
            href="/login"
            className="underline font-semibold"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
