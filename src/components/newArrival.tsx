
// // src/components/NewArrival.tsx
// 'use client'
// import { newArrivalProducts } from "../data/productsData";
// import Image from "next/image";

// export default function NewArrival() {
//   return (

//     <section className="px-6 py-12 max-w-7xl mx-auto">
//     {/* Section Header */}
//     <div className="mb-8">
//       <h3 className="text-sm text-red-500 font-bold uppercase tracking-wide">
//         Featured
//       </h3>
//       <h2 className="text-3xl font-extrabold text-gray-900 mt-2">New Arrival</h2>
//     </div>

//     {/* Product Grid */}
//     <div className="grid grid-cols-1 md:grid-col-6 gap-4">
//       {/* Highlighted Product */}
//       <div className="col-span-2 relative">
//         <Image
//           src={newArrivalProducts[0].imageUrl}
//           width={300}
//           height={300}
//           alt={newArrivalProducts[0].name}
//           className="rrounded-lg w-full  object-cover shadow-lg"
//         />
//         <div className="absolute bottom-8 left-8 text-white">
//           <h3 className="text-2xl font-bold">{newArrivalProducts[0].name}</h3>
//           <p className="text-sm mt-2">{newArrivalProducts[0].description}</p>
//           <button className="mt-4 px-6 py-2 bg-white text-black font-medium rounded-md hover:bg-gray-200">
//             Shop Now
//           </button>
//         </div>
//       </div>

//       {/* Smaller Products */}
//       {newArrivalProducts.slice(0, 3).map((product) => (
//         <div
//           key={product.id}
//           className="relative rounded-lg overflow-hidden shadow-lg"
//         >
//           <Image
//             src={product.imageUrl}
//             width={500}
//             height={500}
//             alt={product.name}
//             className=""
//           />
//           <div className="absolute inset-0 bg-black bg-opacity-50 p-4 flex flex-col justify-end text-white">
//             <h3 className="text-lg font-bold">{product.name}</h3>
//             <p className="text-sm mt-1">{product.description}</p>
//             <button className="mt-3 px-4 py-2 bg-white text-black font-medium rounded-md hover:bg-gray-200">
//               Shop Now
//             </button>
//           </div>
//         </div>

        
//       ))
//       }
//     </div>
//   </section>

//     // <section className="px-8 py-12">
//     //   {/* Section Header */}
//     //   <div className="mb-8">
//     //     <h3 className="text-sm text-red-500 font-bold uppercase tracking-wide">
//     //       Featured
//     //     </h3>
//     //     <h2 className="text-4xl font-extrabold text-gray-900 mt-2">
//     //       New Arrival
//     //     </h2>
//     //   </div>

//     //   {/* Product Grid */}
//     //   <div className="grid grid-cols-1 lg:grid-row gap-6">
//     //     {/* Highlighted Product */}
//     //     <div className="col-span-1 lg:col-span-2 relative group">
//     //       <Image 
//     //         src={newArrivalProducts[0].imageUrl}
//     //         alt={newArrivalProducts[0].name}
//     //         width={200}
//     //         height={200}
//     //         className="rounded-lg w-full h-full object-cover shadow-md"
//     //       />
//     //       <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg opacity-0 group-hover:opacity-100 transition">
//     //         <div className="absolute bottom-8 left-8 text-white">
//     //           <h3 className="text-2xl font-bold">{newArrivalProducts[0].name}</h3>
//     //           <p className="text-sm mt-2">{newArrivalProducts[0].description}</p>
//     //           <button className="mt-4 px-5 py-2 bg-white text-black font-medium rounded-md hover:bg-gray-200">
//     //             Shop Now
//     //           </button>
//     //         </div>
//     //       </div>
//     //     </div>

//     //     {/* Smaller Products */}
//     //     {newArrivalProducts.slice(1).map((product) => (
//     //       <div
//     //         key={product.id}
//     //         className="relative group rounded-lg overflow-hidden shadow-md hover:shadow-lg transition"
//     //       >
//     //         <Image 
//     //           src={product.imageUrl}
//     //           alt={product.name}
//     //           width={200}
//     //           height={200}
//     //           className=""
//     //         />
//     //         <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition">
//     //           <div className="absolute bottom-4 left-4 text-white">
//     //             <h3 className="text-lg font-bold">{product.name}</h3>
//     //             <p className="text-sm mt-1">{product.description}</p>
//     //             <button className="mt-3 px-4 py-2 bg-white text-black font-medium rounded-md hover:bg-gray-200">
//     //               Shop Now
//     //             </button>
//     //           </div>
//     //         </div>
//     //       </div>
//     //     ))}
//     //   </div>
//     // </section>
// //     <div className="p-6">
// //       {/* Section Title */}
// //       <div className="mb-6">
// //         <span className="text-[#DB4444] font-semibold uppercase text-sm">
// //           Featured
// //         </span>
// //         <h2 className="text-4xl font-bold mt-2">New Arrival</h2>
// //       </div>

// //       {/* Product Grid */}
// //       <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
// //         {/* First Item: Larger Highlighted Product */}
// //         <div className="col-span-1 lg:col-span-2 relative">
// //           <Image
// //             src={newArrivalProducts[0].imageUrl}
// //             alt={newArrivalProducts[0].name}
// //             width={300}
// //             height={300}
// //             className="rounded-lg w-full h-full object-cover"
// //           />
// //           <div className="absolute bottom-4 left-4 text-white">
// //             <h3 className="text-2xl font-bold">{newArrivalProducts[0].name}</h3>
// //             <p className="text-sm">{newArrivalProducts[0].description}</p>
// //             <button className="mt-2 px-4 py-2 bg-white text-black font-semibold rounded-md hover:bg-gray-200">
// //               Shop Now
// //             </button>
// //           </div>
// //         </div>

// //         {/* Other Products */}
// //         {newArrivalProducts.slice(0).map((product) => (
// //           <div
// //             key={product.id}
// //             className="relative rounded-lg overflow-hidden shadow-md hover:shadow-lg transition"
// //           >
// //             <Image
// //               src={product.imageUrl}
// //               alt={product.name}
// //               width={300}
// //               height={300}
// //               className="w-full object-cover"
// //             />
// //             <div className="absolute bottom-4 left-4 text-white">
// //               <h3 className="text-lg font-bold">{product.name}</h3>
// //               <p className="text-sm">{product.description}</p>
// //               <button className="mt-2 px-4 py-2 bg-white text-black font-semibold rounded-md hover:bg-gray-200">
// //                 Shop Now
// //               </button>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>

//   );
// }

'use client'
// components/NewArrival.tsx
import React from "react";
import Image from "next/image";

const NewArrival = () => {
  return (
    <section className="bg-gray-100 py-6 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className=" items-center m-4 mt-4 flex">
          <div className="bg-[#DB4444] h-8 w-4 rounded-lg mr-2"></div>
          <h5 className="text-sm  font-semibold text-[#DB4444]">Featured</h5> <br /></div>
       <div className="mb-6">
       <h3 className="text-4xl font-semibold text-gray-800">New Arrival</h3>
       </div>
        

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Product 1 */}
          <div className="relative group h-[600px] w-[570px]">
            <Image
              src="/f1.png"
              alt="PlayStation 5"
              width={511}
              height={511}
              className="w-full rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
              <h3 className="text-white text-xl font-semibold">
                PlayStation 5
              </h3>
              <p className="text-white text-sm">Black and White version</p>
              <button className="mt-2 bg-white text-black px-4 py-2 rounded-md font-medium">
                Shop Now
              </button>
            </div>
          </div>

          {/* Product 2 */}
          <div className="relative group h-[284px] w-[570px] left-80">
            <Image
              src="/f2.png"
              alt="Women's Collections"
              width={432}
              height={286}
              className="w-full rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
              <h3 className="text-white text-xl font-semibold">
                Womens Collections
              </h3>
              <p className="text-white text-sm">
                Featured women collections
              </p>
              <button className="mt-2 bg-white text-black px-4 py-2 rounded-md font-medium">
                Shop Now
              </button>
            </div>
          </div>

          {/* Product 3 */}
          <div className="relative group h-[284px] w-[270px] top-80">
            <Image
              src="/f3.png"
              alt="Speakers"
              width={210}
              height={222}
              className="w-full rounded-lg"
            />
            <div className="absolute inset-0  bg-black bg-opacity-50 flex flex-col justify-end p-4 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
              <h3 className="text-white text-xl font-semibold">Speakers</h3>
              <p className="text-white text-sm">Amazon wireless speakers</p>
              <button className="mt-2 bg-white text-black px-4 py-2 rounded-md font-medium">
                Shop Now
              </button>
            </div>
          </div>

          {/* Product 4 */}
          <div className="relative group h-[284px] w-[270px] top-80">
            <Image
              src="/f4.png"
              alt="Perfume"
              width={210}
              height={222}
              className="w-full rounded-lg"
            />
            <div className="absolute inset-0  bg-black bg-opacity-50 flex flex-col justify-end p-4 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
              <h3 className="text-white text-xl font-semibold">Perfume</h3>
              <p className="text-white text-sm">GUCCI INTENSE OUD EDP</p>
              <button className="mt-2 bg-white text-black px-4 py-2 rounded-md font-medium">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewArrival;
// 'use client'
// import Image from "next/image";

// const NewArrival = () => {
//   return (
//     <section className="bg-gray-50 py-10 px-5">
//       <div className="max-w-7xl mx-auto">
//         {/* Section Header */}
//         <div className="flex items-center mb-6">
//           <div className="bg-red-500 h-2 w-8 rounded-md mr-2"></div>
//           <h2 className="text-2xl font-bold text-gray-800">New Arrival</h2>
//         </div>

//         {/* Main Grid */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//           {/* Large Featured Product */}
//           <div className="lg:col-span-2">
//             <div className="relative h-[600px] -[570px] lg:h-[400px] rounded-lg overflow-hidden">
//               <Image
//                 src="/f1.png" // Update the path as needed
//                 alt="PlayStation 5"
//                 height={600}
//                 width={570}
                
//               // className="object-cover"
//               />
//               <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black via-transparent to-transparent p-5">
//                 <h3 className="text-white text-2xl font-bold">PlayStation 5</h3>
//                 <p className="text-white text-sm">
//                   Black and White version of the PS5 coming out on sale.
//                 </p>
//                 <button className="mt-3 bg-white text-black px-4 py-2 rounded-md font-medium">
//                   Shop Now
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Smaller Products */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
//             {/* Product 1 */}
//             <div className="relative w-full h-40 rounded-lg overflow-hidden">
//               <Image
//                 src="/f2.png" // Update the path
//                 alt="Women's Collection"
//                height={600}
//                width={570}
//                 className="object-cover"
//               />
//               <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black via-transparent to-transparent p-4">
//                 <h3 className="text-white text-lg font-bold">
//                   Womens Collections
//                 </h3>
//                 <p className="text-white text-sm">
//                   Featured women collections for a new vibe.
//                 </p>
//                 <button className="mt-2 bg-white text-black px-3 py-1 rounded-md font-medium">
//                   Shop Now
//                 </button>
//               </div>
//             </div>

//             {/* Product 2 */}
//             <div className="relative w-full h-40 rounded-lg overflow-hidden">
//               <Image
//                 src="/f3.png" // Update the path
//                 alt="Speakers"
//                 fill
//                 className="object-cover"
//               />
//               <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black via-transparent to-transparent p-4">
//                 <h3 className="text-white text-lg font-bold">Speakers</h3>
//                 <p className="text-white text-sm">Amazon wireless speakers.</p>
//                 <button className="mt-2 bg-white text-black px-3 py-1 rounded-md font-medium">
//                   Shop Now
//                 </button>
//               </div>
//             </div>

//             {/* Product 3 */}
//             <div className="relative w-full h-40 rounded-lg overflow-hidden">
//               <Image
//                 src="/f4.png" // Update the path
//                 alt="Perfume"
//                 fill
//                 className="object-cover"
//               />
//               <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black via-transparent to-transparent p-4">
//                 <h3 className="text-white text-lg font-bold">Perfume</h3>
//                 <p className="text-white text-sm">GUCCI INTENSE OUD EDP</p>
//                 <button className="mt-2 bg-white text-black px-3 py-1 rounded-md font-medium">
//                   Shop Now
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default NewArrival;
