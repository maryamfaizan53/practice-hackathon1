"use client";
import Image from "next/image";

import { FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from "react-icons/fa";
import { useRouter } from "next/navigation";

const products = [
  {
    id: 1,
    image: "/Cart5.png",
    name: "HAVIT HV-G92 Gamepad",
    price: 120,
    originalPrice: 160,
    discount: 40,
    reviews: 88,
    rating: 4.5,
  },
  {
    id: 2,
    image: "/Cart6.png",
    name: "AK-900 Wired Keyboard",
    price: 960,
    originalPrice: 1160,
    discount: 35,
    reviews: 75,
    rating: 4.2,
  },
  {
    id: 3,
    image: "/Cart7.png",
    name: "IPS LCD Gaming Monitor",
    price: 370,
    originalPrice: 400,
    discount: 30,
    reviews: 99,
    rating: 4.8,
  },
  {
    id: 4,
    image: "/Cart8.png",
    name: "S-Series Comfort Chair",
    price: 375,
    originalPrice: 400,
    discount: 25,
    reviews: 99,
    rating: 4.7,
  },
  {
    id: 5,
    image: "/Cart9.png",
    name: "HAVIT HV-G92 Gamepad",
    price: 120,
    originalPrice: 160,
    discount: 40,
    reviews: 88,
    rating: 4.5,
  },
  {
    id: 6,
    image: "/Cart10.png",
    name: "AK-900 Wired Keyboard",
    price: 960,
    originalPrice: 1160,
    discount: 35,
    reviews: 75,
    rating: 4.2,
  },
  {
    id: 7,
    image: "/Cart11.png",
    name: "IPS LCD Gaming Monitor",
    price: 370,
    originalPrice: 400,
    discount: 30,
    reviews: 99,
    rating: 4.8,
  },
  {
    id: 8,
    image: "/Cart3.png",
    name: "S-Series Comfort Chair",
    price: 375,
    originalPrice: 400,
    discount: 25,
    reviews: 99,
    rating: 4.7,
  },


];
const ExploreProducts = () => {
  const router = useRouter();
   
  return (
    <div className="container mx-auto py-8">
      {/* Header Section
      <div className="">
        <span className="text-[#DB4444]">Our Products</span>
        <h2 className="text-3xl font-bold mb-4">Explore Our Products</h2>
      </div> */}
           {/* Header */}
           <div className=" items-center m-4 mt-4 flex">
          <div className="bg-[#DB4444] h-8 w-4 rounded-lg mr-2"></div>
          <h5 className="text-sm  font-semibold text-[#DB4444]">Our Products</h5> <br /></div>
       <div className="mb-6">
       <h3 className="text-4xl font-semibold text-gray-800">Explore Our Products</h3>
       <div className="flex justify-center gap-4 mb-4 right-40  absolute">
          <FaRegArrowAltCircleLeft className="text-2xl text-[#726a6a] hover:text[#DB4444] cursor-pointer " />
          <FaRegArrowAltCircleRight className="text-2xl text-[#716d6d] cursor-pointer hover:text[#DB4444" />
        </div>
       </div>

   

      {/* Product List */}
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
              ${product.price}{" "}
              <span className="text-gray-500 line-through">
                ${product.originalPrice}
              </span>
            </p>
            <div className="mt-2 text-yellow-500">
              {"★".repeat(Math.floor(product.rating))}
              <span className="text-gray-500 text-sm">
                {" "}
                ({product.reviews})
              </span>
            </div>
            
          </div>
        ))}
        <div className="flex justify-center item-center content-center  gap-4 ">
       <button
            className="bg-[#DB4444] text-black px-6 py-2 shadow-lg hover:bg-black hover:text-white transition duration-300 relative bottom-6 rounded-lg left-96 top-3 justify-center item-center content-center"
            onClick={() => router.push('/products')}
          >
          View All Products
          </button>
        </div> 

      </div>
       



    </div>
    
  );
};

export default ExploreProducts;