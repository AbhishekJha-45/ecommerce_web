import { FaChevronCircleRight } from "react-icons/fa";

import Image from "next/image";
import React, { Suspense } from "react";

import ProductCard from "../../components/Common/Cards/ProductCard";
import axios from "axios";
import BASE_URL from "constants/constants";

async function Home() {
  const products = await axios.post(`${BASE_URL}/product/product-by-category`, {
    category_id: "66dd5c67c81cc1ddb7db33af",
  });

  return (
    <Suspense fallback={<>Loading...</>}>
      <div className="px-4 md:px-[2rem] bg-white-200">
        <div className="bg-slate-50 my-5 p-5">
          <div className="flex justify-between items-center px-3">
            <h2 className="flex font-bold text-black md:text-lg lg:text-xl  justify-between hover:underline underline-offset-8">
              Vegetables & Fruits
            </h2>
            <a href={`#`}>
              <button className="bg-transparent border-none p-0 text-black hover:text-green-500 transition duration-300 ease-in-out">
                <FaChevronCircleRight className="text-lg md:text-xl lg:text-2xl" />
              </button>
            </a>
          </div>
          <div className="grid -z-10 lg:grid-cols-7 xl:grid-cols-7 md:gap-y-3 flex-wrap md:grid-cols-3 grid-cols-1 gap-y-3 justify-center gap-x-3 mt-3">
            {products.data?.message?.length > 0 &&
              products.data?.message?.map((product, i) => {
                return (
                  <ProductCard
                    key={i}
                    product={{
                      id: product._id,
                      name: product.name,
                      price: product.price,
                      image: product.image,
                    }}
                  />
                );
              })}
          </div>
        </div>
      </div>

      <div className="threeBox flex flex-wrap items-center justify-evenly md:h-[30vw] mt-5">
        {/* 1st box */}
        <div className="bg-slate-200 w-full md:w-[30%] md:h-full flex flex-col p-2 gap-2">
          <div className="flex font-bold text-black md:text-lg lg:text-xl justify-between underline px-1">
            NAMKEENS
            <a
              href="/namkeen"
              className="bg-transparent border-none p-0 text-black hover:text-green-500 transition duration-300 ease-in-out"
            >
              <FaChevronCircleRight className="text-lg md:text-xl lg:text-2xl" />
            </a>
          </div>
          <div className="h-full mt-2 flex gap-2">
            <div className="bg-white h-[50%] w-[50%] mt-[25%] flex items-center justify-around contain-content">
              <Image
                src="/images/namkeens/haldiram-all-in-one.png"
                // layout="resposnive"
                alt="Haldiram All-in-One"
                width={280}
                height={240}
                className="h-full w-full object-contain hover:scale-105 transition-all duration-200"
              />
            </div>
            <div className="flex flex-col w-[50%] gap-2">
              <div className="bg-white h-[44%] flex items-center justify-around contain-content">
                <Image
                  src="/images/namkeens/kuch-kuch-400-gm-pouch.png"
                  // layout="resposnive"
                  alt="Kuch Kuch"
                  width={280}
                  height={240}
                  className="h-full w-full object-contain hover:scale-105 transition-all duration-200"
                />
              </div>
              <div className="bg-white h-[44%] flex items-center justify-around contain-content ">
                <Image
                  src="/images/namkeens/bikaji-bhujiya.jpg"
                  // layout="resposnive"
                  alt="Bikaji Bhujiya"
                  width={280}
                  height={240}
                  className="h-full w-full object-contain hover:scale-105 transition-all duration-200"
                />
              </div>
            </div>
          </div>
        </div>

        {/* second box */}
        <div className="bg-slate-200 w-full md:w-[30%] md:h-full flex flex-col p-2 gap-2">
          <div className="flex font-bold text-black md:text-lg lg:text-xl justify-between underline px-1">
            DRY FRUITS
            <a
              href="/dry-fruits"
              className="bg-transparent border-none p-0 text-black hover:text-green-500 transition duration-300 ease-in-out"
            >
              <FaChevronCircleRight className="text-lg md:text-xl lg:text-2xl" />
            </a>
          </div>
          <div className="flex gap-2 h-[50%]">
            <div className="bg-white flex items-center justify-around w-[50%] contain-content">
              <Image
                src="/images/dry-fruits/almonds.png"
                // layout="resposnive"
                alt="Almonds"
                width={280}
                height={240}
                className="h-full w-full object-contain hover:scale-105 transition-all duration-200"
              />
            </div>
            <div className="bg-white flex items-center justify-around w-[50%]">
              <Image
                src="/images/dry-fruits/cashew.png"
                // layout="resposnive"
                alt="Cashews"
                width={280}
                height={240}
                className="h-full w-full object-contain hover:scale-105 transition-all duration-200"
              />
            </div>
          </div>
          <div className="flex gap-2 h-[50%]">
            <div className="bg-white flex items-center justify-around w-[50%] mt-2 md:mt-0 contain-content">
              <Image
                src="/images/dry-fruits/walnuts.png"
                // layout="resposnive"
                alt="Cashews"
                width={280}
                height={240}
                className="h-full w-full object-contain hover:scale-105 transition-all duration-200"
              />
            </div>
            <div className="bg-white flex items-center justify-around w-[50%] mt-2 md:mt-0 contain-content">
              <Image
                src="/images/dry-fruits/raisins.png"
                // layout="resposnive"
                alt="Cashews"
                width={280}
                height={240}
                className="h-full w-full object-contain hover:scale-105 transition-all duration-200"
              />
            </div>
          </div>
        </div>

        {/* 3rd box */}
        <div className="bg-slate-200 w-full md:w-[30%] md:h-full flex flex-col p-2 gap-2">
          <div className="flex font-bold text-black md:text-lg lg:text-xl justify-between underline px-1">
            DAIRY PRODUCTS
            <a
              href="dairy"
              className="bg-transparent border-none p-0 text-black hover:text-green-500 transition duration-300 ease-in-out"
            >
              <FaChevronCircleRight className="text-lg md:text-xl lg:text-2xl" />
            </a>
          </div>
          <div className="h-full mt-2 flex gap-2">
            <div className="bg-white h-[50%] w-[50%] mt-[25%] flex items-center justify-around contain-content">
              <Image
                src="/images/dairy/paneer.png"
                // layout="resposnive"
                alt="Paneer"
                width={280}
                height={240}
                className="h-full w-full object-contain hover:scale-105 transition-all duration-200"
              />
            </div>
            <div className="flex flex-col w-[50%] gap-2">
              <div className="bg-white h-[50%] flex items-center justify-around contain-content">
                <Image
                  src="/images/dairy/milk.jpg"
                  // layout="resposnive"
                  alt="Amul Milk"
                  width={280}
                  height={240}
                  className="h-full w-full object-contain hover:scale-105 transition-all duration-200"
                />
              </div>
              <div className="bg-white h-[50%] flex items-center justify-around contain-content">
                <Image
                  src="/images/dairy/amul-butter.jpg"
                  // layout="resposnive"
                  alt="Butter"
                  width={280}
                  height={240}
                  className="h-full w-full object-contain hover:scale-105 transition-all duration-200"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-44 mt-20 flex gap-3 px-9">
        <div className="bg-green-400 w-[15%] ">1</div>
        <div className="bg-teal-500 w-[15%] ">2</div>
        <div className="bg-cyan-500 w-[15%]">3</div>
        <div className="bg-red-400 w-[15%]">4</div>
        <div className="bg-purple-400 w-[15%]">5</div>
        <div className="bg-pink-200 w-[15%]">6</div>
        <div className="bg-slate-400 w-[15%]">7 </div>
        <div className="bg-orange-400 w-[15%]">8 </div>
      </div>

      <div className="h-[20vw]"></div>
    </Suspense>
  );
}

export default Home;
