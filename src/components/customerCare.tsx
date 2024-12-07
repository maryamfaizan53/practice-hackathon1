// 'use client'
// import React from 'react'
// import Image from 'next/image';


// const CustomerCare = () => {
//   return (
//     <>
//     <div className='relative flex sm:flex-row md:flex-col bg-black border-gray-500 border-solid rounded-full 
  
//      justify-around   hover:shadow-xl '>
//         <div className=' text-white items-center justify-center content-center'>
//          <Image src="/i1.png" alt="Customer care services" width={40} height={40} />
//         </div>
//         <h5 className='font-bold'>FREE AND FAST DELIVERY</h5>
//         <p className='font-bold'>Free delivery for all orders over $140</p>
//     </div>



// <div className='flex sm:flex-row md:flex-col bg-black border-gray-500 border-solid rounded-full border-2xl h-[161px] w-[249px] justify-around ml-40  hover:shadow-xl hover:scale-105 transition-transform'>
// <div>
//  <Image src="/i2.png" alt="Customer care services" width={40} height={40} />
// </div>
// <h5 className='font-bold'>24/7 CUSTOMER SERVICE</h5>
// <p className='font-bold'>Friendly 24/7 customer support</p>
// </div>



// <div className='flex sm:flex-row md:flex-col bg-black border-gray-500 border-solid rounded-full border-2xl h-[161px] w-[249px] justify-around ml-40  hover:shadow-xl hover:scale-105 transition-transform'>
// <div>
//  <Image src="/i3.png" alt="Customer care services" width={40} height={40} />
// </div>
// <h5 className='font-bold'>MONEY BACK GUARANTEE</h5>
// <p className='font-bold'>We reurn money within 30 days</p>
// </div>
// </>
//   )
// }

// export default CustomerCare
'use client';
import React from 'react';
import Image from 'next/image';

const CustomerCare = () => {
  return (
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
  );
};

export default CustomerCare;

