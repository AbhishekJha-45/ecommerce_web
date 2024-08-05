import React from "react";
import { FaChevronCircleRight } from "react-icons/fa";
import Image from "next/image";



//Images:---

import brinjal from "/public/10000584_11-fresho-brinjal-nagpur.jpg";
import ladyfinger from "/public/lady_finger.jpg"
import tomato from "/public/tomatoes.jpg";
import cauliFlower from "/public/cauliflower.jpg"
import potato from "/public/potato.jpg"
import onion from "/public/onion.jpg"


function Home() {
  return (
    <>
      <div className="flex flex-wrap md:flex-nowrap ">
        <div className="bg-slate-400 w-full md:w-[25%] h-[30vw] m-2 md:m-7 rounded-lg flex items-center justify-center">
          div1
        </div>
        <div className="w-full md:w-[50%]">
          <div className="bg-slate-400 w-full h-[14vw] mt-2 md:mt-7  flex items-center justify-center rounded-lg">
            div2
          </div>
          <div className="bg-slate-400 w-full h-[14vw] mt-2 md:mt-[2vw] flex items-center justify-center rounded-lg">
            div3
          </div>
        </div>
        <div className="bg-slate-400 w-full  h-[30vw] md:w-[25%] m-2 md:m-7  flex items-center justify-center rounded-lg">
          div4
        </div>
      </div>
      {/* /        <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl"> */}
      <div className="px-4 md:px-[5rem]  md:flex-nowrap bg-white-200">
        <div className="bg-slate-400 h-auto md:h-[18vw] mt-5 p-3 ">
          <div className="pb-1 md:pb-2 lg:pb-4 px-6">
            <h2 className=" flex font-bold text-black md:text-lg lg:text-xl justify-between">
              Best of "categoryName"
              <button className="bg-transparent border-none p-0 text-yellow-400 hover:text-black transition duration-300 ease-in-out">
                <FaChevronCircleRight className="text-lg md:text-xl lg:text-2xl" />
              </button>
            </h2>
          </div>
          <div className="flex flex-wrap items-center justify-around px-5 gap-3">
            <div className="bg-gray-200 h-[12vw] w-[30%] md:w-[15%] mt-1">
              <Image
                src={brinjal}
                alt="brinjal"
                className="h-full w-full object-cover "
              />
            </div>
            <div className="bg-gray-200 h-[12vw] w-[30%] md:w-[15%] mt-1">
              <Image
                src={ladyfinger}
                alt="ladyfinger"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="bg-gray-200 h-[12vw] w-[30%] md:w-[15%] mt-1">
              <Image
                src={tomato}
                alt="tomatoes"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="bg-gray-200 h-[12vw] w-[30%] md:w-[15%] mt-1">
              <Image
                src={cauliFlower}
                alt="Gobhi"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="bg-gray-200 h-[12vw] w-[30%] md:w-[15%] mt-1">
              <Image
                src={potato}
                alt="Aalo"
                className="h-full w-full object-cover"
              />
            </div>
            <div className=" h-[12vw] w-[30%] md:w-[15%] mt-1">
              <Image
                src={onion}
                alt="onion"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="bg-slate-400 h-auto md:h-[18vw] mt-5 p-3 ">
          <div className="pb-1 md:pb-2 lg:pb-4 px-6">
            <h2 className=" flex font-bold text-black md:text-lg lg:text-xl justify-between">
              Best of "categoryName"
              <button className="bg-transparent border-none p-0 text-yellow-400 hover:text-black transition duration-300 ease-in-out">
                <FaChevronCircleRight className="text-lg md:text-xl lg:text-2xl" />
              </button>
            </h2>
          </div>
          <div className="flex flex-wrap items-center justify-around px-5 gap-3">
            <div className="bg-orange-300 h-[12vw] w-[30%] md:w-[15%] mt-1">
              1
            </div>
            <div className="bg-orange-300 h-[12vw] w-[30%] md:w-[15%] mt-1">
              2
            </div>
            <div className="bg-orange-300 h-[12vw] w-[30%] md:w-[15%] mt-1">
              3
            </div>
            <div className="bg-orange-300 h-[12vw] w-[30%] md:w-[15%] mt-1">
              4
            </div>
            <div className="bg-orange-300 h-[12vw] w-[30%] md:w-[15%] mt-1">
              5
            </div>
            <div className="bg-orange-300 h-[12vw] w-[30%] md:w-[15%] mt-1">
              6
            </div>
          </div>
        </div>
        <div className="bg-slate-400 h-auto md:h-[18vw] mt-5 p-3 ">
          <div className="pb-1 md:pb-2 lg:pb-4 px-6">
            <h2 className=" flex font-bold text-black md:text-lg lg:text-xl justify-between">
              Best of "categoryName"
              <button className="bg-transparent border-none p-0 text-yellow-400 hover:text-black transition duration-300 ease-in-out">
                <FaChevronCircleRight className="text-lg md:text-xl lg:text-2xl" />
              </button>
            </h2>
          </div>
          <div className="flex flex-wrap items-center justify-around px-5 gap-3">
            <div className="bg-orange-300 h-[12vw] w-[30%] md:w-[15%] mt-1">
              1
            </div>
            <div className="bg-orange-300 h-[12vw] w-[30%] md:w-[15%] mt-1">
              2
            </div>
            <div className="bg-orange-300 h-[12vw] w-[30%] md:w-[15%] mt-1">
              3
            </div>
            <div className="bg-orange-300 h-[12vw] w-[30%] md:w-[15%] mt-1">
              4
            </div>
            <div className="bg-orange-300 h-[12vw] w-[30%] md:w-[15%] mt-1">
              5
            </div>
            <div className="bg-orange-300 h-[12vw] w-[30%] md:w-[15%] mt-1">
              6
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-around bg-slate-400 md:h-[30vw] mt-5  ">
          <div className="bg-orange-300 w-full md:w-[30%] md:h-full flex flex-col md:flex-row p-2 gap-2">
            <div className="bg-slate-500 w-full md:w-[50%] md:h-[50%] flex items-center justify-around mt-2 md:mt-[25%]">
              One
            </div>
            <div className="w-full md:w-[50%] flex flex-col gap-2">
              <div className="bg-slate-500 h-[50%] flex items-center justify-around">
                Two
              </div>
              <div className="bg-slate-500 h-[50%] flex items-center justify-around">
                Three
              </div>
            </div>
          </div>
          <div className="bg-orange-300 w-full md:w-[30%] md:h-full flex flex-col p-2 gap-2">
            <div className="flex gap-2 h-[50%]">
              <div className="bg-slate-500 flex items-center justify-around w-[50%]">
                One
              </div>
              <div className="bg-slate-500 flex items-center justify-around w-[50%]">
                Two
              </div>
            </div>
            <div className="flex gap-2 h-[50%]">
              <div className="bg-slate-500 flex items-center justify-around w-[50%] mt-2 md:mt-0">
                Three
              </div>
              <div className="bg-slate-500 flex items-center justify-around w-[50%] mt-2 md:mt-0">
                Four
              </div>
            </div>
          </div>
          <div className="bg-orange-300 w-full md:w-[30%] md:h-full flex flex-col md:flex-row p-2 gap-2">
            <div className="bg-slate-500 w-full md:w-[50%] md:h-[50%] flex items-center justify-around mt-2 md:mt-[25%]">
              One
            </div>
            <div className="w-full md:w-[50%] flex flex-col gap-2">
              <div className="bg-slate-500 h-[50%] flex items-center justify-around">
                Two
              </div>
              <div className="bg-slate-500 h-[50%] flex items-center justify-around">
                Three
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-around bg-slate-400 md:h-[30vw] mt-5  ">
          <div className="bg-orange-300 w-full md:w-[30%] md:h-full flex flex-col md:flex-row p-2 gap-2">
            <div className="bg-slate-500 w-full md:w-[50%] md:h-[50%] flex items-center justify-around mt-2 md:mt-[25%]">
              One
            </div>
            <div className="w-full md:w-[50%] flex flex-col gap-2">
              <div className="bg-slate-500 h-[50%] flex items-center justify-around">
                Two
              </div>
              <div className="bg-slate-500 h-[50%] flex items-center justify-around">
                Three
              </div>
            </div>
          </div>
          <div className="bg-orange-300 w-full md:w-[30%] md:h-full flex flex-col p-2 gap-2">
            <div className="flex gap-2 h-[50%]">
              <div className="bg-slate-500 flex items-center justify-around w-[50%]">
                One
              </div>
              <div className="bg-slate-500 flex items-center justify-around w-[50%]">
                Two
              </div>
            </div>
            <div className="flex gap-2 h-[50%]">
              <div className="bg-slate-500 flex items-center justify-around w-[50%] mt-2 md:mt-0">
                Three
              </div>
              <div className="bg-slate-500 flex items-center justify-around w-[50%] mt-2 md:mt-0">
                Four
              </div>
            </div>
          </div>
          <div className="bg-orange-300 w-full md:w-[30%] md:h-full flex flex-col md:flex-row p-2 gap-2">
            <div className="bg-slate-500 w-full md:w-[50%] md:h-[50%] flex items-center justify-around mt-2 md:mt-[25%]">
              One
            </div>
            <div className="w-full md:w-[50%] flex flex-col gap-2">
              <div className="bg-slate-500 h-[50%] flex items-center justify-around">
                Two
              </div>
              <div className="bg-slate-500 h-[50%] flex items-center justify-around">
                Three
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-400 h-auto md:h-[18vw] mt-5 p-3 ">
          <div className="pb-1 md:pb-2 lg:pb-4 px-6">
            <h2 className=" flex font-bold text-black md:text-lg lg:text-xl justify-between">
              Best of "categoryName"
              <button className="bg-transparent border-none p-0 text-yellow-400 hover:text-black transition duration-300 ease-in-out">
                <FaChevronCircleRight className="text-lg md:text-xl lg:text-2xl" />
              </button>
            </h2>
          </div>
          <div className="flex flex-wrap items-center justify-around px-5 gap-3">
            <div className="bg-orange-300 h-[12vw] w-[30%] md:w-[15%] mt-1">
              1
            </div>
            <div className="bg-orange-300 h-[12vw] w-[30%] md:w-[15%] mt-1">
              2
            </div>
            <div className="bg-orange-300 h-[12vw] w-[30%] md:w-[15%] mt-1">
              3
            </div>
            <div className="bg-orange-300 h-[12vw] w-[30%] md:w-[15%] mt-1">
              4
            </div>
            <div className="bg-orange-300 h-[12vw] w-[30%] md:w-[15%] mt-1">
              5
            </div>
            <div className="bg-orange-300 h-[12vw] w-[30%] md:w-[15%] mt-1">
              6
            </div>
          </div>
        </div>

        <div className="h-[70vw]"></div>
      </div>
    </>
  );
}

export default Home;
