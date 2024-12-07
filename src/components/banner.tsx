// // 'use client'
// // import React from 'react'
// // import Image from 'next/image';
// // import { useRouter } from "next/navigation";



// // const Banner = () => {
// //     const router = useRouter();
// //   return (
// //     <div className='w-[1170px] h-[500px] bg-black'>
// //         <p>Catagories</p>
// //         <h2>Enhance Your Music Experience</h2>
// //         <div className='h-[62px] w-[62px] bg-white rounded-full' ><p>23 <br />Hours</p></div>
// //         <div className='h-[62px] w-[62px] bg-white rounded-full' ><p>05 <br />Days</p></div>
// //         <div className='h-[62px] w-[62px] bg-white rounded-full' ><p>59 <br />Minutes</p></div>
// //         <div className='h-[62px] w-[62px] bg-white rounded-full' ><p>35 <br />Seconds</p></div>
// //         <Image src="/banner.png" alt="Banner" width={600} height={420} />
        
// //   {/* View All Button */}
// //   <div className="text-center mt-8">
// //       <button
// //       className="bg-[00FF66] text-white px-6 py-2 rounded-lg shadow-lg hover:bg-whitetransition"
// //       onClick={() => router.push("/products")}
// //     >
// //       Buy Now
// //     </button>
// //       </div>
// //     </div>
// //   )
// // }

// // export default Banner;

// // 'use client';

// // import React from 'react';
// // import Image from 'next/image';
// // import { useRouter } from 'next/navigation';

// // const Banner = () => {
// //   const router = useRouter();

// //   return (
// //     <div className="relative w-full h-[500px] bg-black text-white p-4 flex flex-col justify-center items-center gap-4 md:flex-row md:gap-8">
// //       {/* Text and Countdown Section */}
// //       <div className="flex flex-col items-center md:items-start text-center md:text-left">
// //         <p className="text-sm font-medium">Categories</p>
// //         <h2 className="text-2xl md:text-4xl font-bold mb-4">Enhance Your Music Experience</h2>
        
// //         {/* Countdown Timers */}
// //         <div className="flex gap-4 mb-6">
// //           {['Hours', 'Days', 'Minutes', 'Seconds'].map((label, index) => (
// //             <div key={index} className="h-[62px] w-[62px] bg-white rounded-full flex flex-col items-center justify-center text-center text-black">
// //               <p className="font-bold text-lg">23</p>
// //               <p className="text-xs">{label}</p>
// //             </div>
// //           ))}
// //         </div>

// //         {/* View All Button */}
// //         <div className="text-center mt-4">
// //           <button
// //             className="bg-[#00FF66] text-black px-6 py-2 rounded-lg shadow-lg hover:bg-white transition duration-300"
// //             onClick={() => router.push('/products')}
// //           >
// //             Buy Now
// //           </button>
// //         </div>
// //       </div>

// //       {/* Image Section */}
// //       <div className="relative w-full md:w-1/2">
// //         <Image src="/banner.png" alt="Banner" width={600} height={420} className="object-cover w-full h-full rounded-lg shadow-lg" />
// //       </div>
// //     </div>
// //   );
// // };

// // export default Banner;

// 'use client';

// import React, { useState, useEffect } from 'react';
// import Image from 'next/image';
// import { useRouter } from 'next/navigation';

// const Banner = () => {
//   const router = useRouter();
  
//   // State to hold the countdown
//   const [timeLeft, setTimeLeft] = useState({
//     hours: 0,
//     days: 0,
//     minutes: 0,
//     seconds: 0,
//   });

//   // UseEffect to handle the countdown logic
//   useEffect(() => {
//     const targetDate = new Date().setHours(23, 59, 59, 999); // End of the day
//     const interval = setInterval(() => {
//       const now = new Date().getTime();
//       const distance = targetDate - now;

//       if (distance > 0) {
//         setTimeLeft({
//           days: Math.floor(distance / (1000 * 60 * 60 * 24)),
//           hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
//           minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
//           seconds: Math.floor((distance % (1000 * 60)) / 1000),
//         });
//       } else {
//         clearInterval(interval);
//       }
//     }, 1000);

//     return () => clearInterval(interval); // Cleanup on component unmount
//   }, []);

//   return (
//     <div className="relative w-full h-[500px] bg-black text-white p-4 flex flex-col justify-center items-center gap-4 md:flex-row md:gap-8">
//       {/* Text and Countdown Section */}
//       <div className="flex flex-col items-center md:items-start text-center md:text-left">
//         <p className="text-sm font-medium">Categories</p>
//         <h2 className="text-2xl md:text-4xl font-bold mb-4">Enhance Your Music Experience</h2>
        
//         {/* Countdown Timers */}
//         <div className="flex gap-4 mb-6">
//           {['Days', 'Hours', 'Minutes', 'Seconds'].map((label, index) => (
//             <div key={index} className="h-[62px] w-[62px] bg-white rounded-full flex flex-col items-center justify-center text-center text-black">
//               {/* <p className="font-bold text-lg">{timeLeft[label.toLowerCase()]}</p> */}
//               <p className="text-xs">{label}</p>
//             </div>
//           ))}
//         </div>

//         {/* View All Button */}
//         <div className="text-center mt-4">
//           <button
//             className="bg-[#00FF66] text-black px-6 py-2 rounded-lg shadow-lg hover:bg-white transition duration-300"
//             onClick={() => router.push('/products')}
//           >
//             Buy Now
//           </button>
//         </div>
//       </div>

//       {/* Image Section */}
//       <div className="relative w-full md:w-1/2">
//         <Image src="/banner.png" alt="Banner" width={600} height={420} className="object-cover w-full h-full rounded-lg shadow-lg" />
//       </div>
//     </div>
//   );
// };

// export default Banner;

'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Banner = () => {
  const router = useRouter();

  // State to hold the countdown
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // UseEffect to handle the countdown logic
  useEffect(() => {
    const targetDate = new Date().setHours(23, 59, 59, 999); // End of the current day
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
        clearInterval(interval); // Stop the countdown once the target date is reached
      }
    }, 1000);

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div className="relative w-full h-[500px] bg-black text-white p-4 flex flex-col justify-center items-center gap-4 md:flex-row md:gap-8">
      {/* Text and Countdown Section */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left">
        <p className="text-sm font-medium text-[#00FF66]">Categories</p>
        <h2 className="text-2xl md:text-4xl font-bold mb-4">Enhance Your Music Experience</h2>

        {/* Countdown Timers */}
        <div className="flex gap-4 mb-6">
          {['Days', 'Hours', 'Minutes', 'Seconds'].map((label, index) => (
            <div
              key={index}
              className="h-[62px] w-[62px] bg-white rounded-full flex flex-col items-center justify-center text-center text-black"
            >
              <p className="font-bold text-lg">{timeLeft[label.toLowerCase() as keyof typeof timeLeft]}</p>
              <p className="text-xs">{label}</p>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-4">
          <button
            className="bg-[#00FF66] text-black px-6 py-2 rounded-lg shadow-lg hover:bg-white transition duration-300"
            onClick={() => router.push('/products')}
          >
            Buy Now
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="relative w-full md:w-1/2">
        <Image
          src="/banner.png"
          alt="Banner"
          width={600}
          height={420}
          className="object-cover w-full h-full rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default Banner;
