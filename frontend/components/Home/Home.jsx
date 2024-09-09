import { FaChevronCircleRight } from "react-icons/fa";

import Image from "next/image";
import React, { Suspense } from "react";

import ProductCard from "@components/Products/Card/ProductCard";
import axios from "axios";
import BASE_URL from "constants/constants";

const images = {
  vegetables: [
    {
      src: "/images/vegetables/brinjal.jpg",
      alt: "brinjal",
      name: "Eggplant/Brinjal/ बैगन",
    },
    {
      src: "/images/vegetables/lady_finger.jpg",
      alt: "ladyfinger",
      name: "Okra/ भिंडी",
    },
    {
      src: "/images/vegetables/tomatoes.jpg",
      alt: "tomatoes",
      name: "Tomato/ टमाटर",
    },
    {
      src: "/images/vegetables/cauliflower.jpg",
      alt: "Gobhi",
      name: "Cauliflower/फूलगोभी",
    },
    {
      src: "/images/vegetables/potato.jpg",
      alt: "Aalo",
      name: "Potato/ आलू",
    },
    {
      src: "/images/vegetables/Onion.jpg",
      alt: "onion",
      name: "Onion/ प्याज",
    },
  ],
  fruits: [
    {
      src: "/images/fruits/papaya.jpg",
      alt: "papaya",
      name: "Papaya/Papita",
      price: 20,
    },
    {
      src: "/images/fruits/apple.jpg",
      alt: "apple",
      name: "Apple/Seb",
      price: 200,
    },
    {
      src: "/images/fruits/banana.jpg",
      alt: "banana",
      name: "Banana",
      price: 15,
    },
    {
      src: "/images/fruits/kiwi.jpg",
      alt: "kiwi",
      name: "Kiwi",
      price: 100,
    },
    {
      src: "/images/fruits/pineapple.jpg",
      alt: "pineapple",
      name: "Pineapple",
      price: 300,
    },
    {
      src: "/images/fruits/oranges.jpg",
      alt: "oranges",
      name: "Oranges",
      price: 90,
    },
  ],
  grocery: [
    {
      src: "/images/grocery/aasirvad-aata.avif",
      alt: "atta",
      name: "Aashirvaad Atta",
      price: 50,
    },
    {
      src: "/images/grocery/toor-dal.jpg",
      alt: "dal",
      name: "Toor Dal",
      price: 100,
    },
    {
      src: "/images/grocery/basmati-rice.jpg",
      alt: "rice",
      name: "Basmati Rice",
      price: 200,
    },
    {
      src: "/images/grocery/sugar.jpg",
      alt: "sugar",
      name: "Sugar",
      price: 40,
    },
    {
      src: "/images/grocery/tata-salt.jpg",
      alt: "salt",
      name: "Salt",
      price: 10,
    },
    {
      src: "/images/grocery/tata-tea-premium.jpg",
      alt: "tea",
      name: "Tea",
      price: 20,
    },
  ],
  "bathroom-needs": [
    {
      src: "/images/bathroom-needs/dettol-handwash.jpg",
      alt: "handwash",
      name: "Dettol Handwash",
      price: 50,
    },
    {
      src: "/images/bathroom-needs/dettol-soap.jpg",
      alt: "soap",
      name: "Dettol Soap",
      price: 30,
    },
    {
      src: "/images/bathroom-needs/harpic-toilet-cleaner.webp",
      alt: "toilet-cleaner",
      name: "Harpic Toilet Cleaner",
      price: 80,
    },
    {
      src: "/images/bathroom-needs/surf-excel-detergent.jpg",
      alt: "detergent",
      name: "Surf Excel Detergent",
      price: 60,
    },
    {
      src: "/images/bathroom-needs/vim-dishwash.jpg",
      alt: "dishwash",
      name: "Vim Dishwash",
      price: 30,
    },
    {
      src: "/images/bathroom-needs/colgate-toothpaste.jpg",
      alt: "toothpaste",
      name: "Colgate Toothpaste",
      price: 40,
    },
  ],
  "dry-fruits": [
    {
      src: "/images/dry-fruits/almonds.png",
      alt: "almonds",
      name: "Almonds",
      price: 100,
    },
    {
      src: "/images/dry-fruits/cashew.png",
      alt: "cashews",
      name: "Cashews",
      price: 600,
    },
    {
      src: "/images/dry-fruits/raisins.jpg",
      alt: "raisins",
      name: "Raisins",
      price: 500,
    },
    {
      src: "/images/dry-fruits/walnuts.png",
      alt: "walnuts",
      name: "Walnuts",
      price: 450,
    },
  ],
  dairy: [
    {
      src: "/images/dairy/paneer.png",
      alt: "Paneer",
      name: "Paneer",
      price: 100,
    },
    {
      src: "/images/dairy/milk.jpg",
      alt: "Amul Milk",
      name: "Amul Milk",
      price: 30,
    },
    {
      src: "/images/dairy/amul-butter.jpg",
      alt: "Butter",
      name: "Butter",
      price: 50,
    },
  ],
  "dry-fruits": [
    {
      src: "/images/dry-fruits/almonds.png",
      alt: "Almonds",
      name: "Almonds",
      price: 100,
    },
    {
      src: "/images/dry-fruits/cashew.png",
      alt: "Cashews",
      name: "Cashews",
      price: 600,
    },
    {
      src: "/images/dry-fruits/raisins.jpg",
      alt: "Raisins",
      name: "Raisins",
      price: 500,
    },
    {
      src: "/images/dry-fruits/walnuts.png",
      alt: "Walnuts",
      name: "Walnuts",
      price: 450,
    },
  ],
  namkeen: [
    {
      src: "/images/namkeens/haldiram-all-in-one.png",
      alt: "Haldiram All-in-One",
      name: "Haldiram All-in-One",
      price: 50,
    },
    {
      src: "/images/namkeens/kuch-kuch-400-gm-pouch.png",
      alt: "Kuch Kuch",
      name: "Kuch Kuch",
      price: 40,
    },
    {
      src: "/images/namkeens/bikaji-bhujiya-1kg.jpg",
      alt: "Bikaji Bhujiya",
      name: "Allo Bhujiya",
      price: 60,
    },
  ],
};

async function Home() {
  const products = await axios.post(`${BASE_URL}/product/product-by-category`, {
    category_id: "66dd5c67c81cc1ddb7db33af",
  });
function ProductCard({ product }) {
  return (
    <div className="image-container bg-white h-[12vw] w-[30%] md:w-[15%] mt-1  ">
      <Image
        src={product.src}
        alt={product.alt}
        width={280}
        height={240}
        className="h-full w-full object-contain hover:scale-105 transition-all duration-200"
        className="h-full w-full object-contain hover:scale-105 transition-all duration-200 "
      />

      <div className="product-info mt-2">
        <h2 className="product-name font-bold mt-0">
          <a href="/products/Brinjal">{product.name}</a>
        </h2>
        <div className="product-details">
          <p className={lato.className}>
            Per 250gm
            <br />₹ {product.price || 10}
          </p>
        </div>
        <button className="text-green-600 border border-green-600 hover:bg-green-200 w-[35%] font-bold flex justify-around items-center rounded">
          Add <IoAdd />
        </button>
      </div>
    </div>
  );
}

  return (
    <Suspense fallback={<>Loading...</>}>
      <div className="px-4 md:px-[2rem] bg-white-200">
        <div className="bg-slate-50 h-auto md:h-[24vw] mt-5 p-3">
          <div className="pb-1 md:pb- lg:pb-4 px-6">
            <h2 className="flex font-bold text-black md:text-lg lg:text-xl justify-between underline">
              {/* {category.toUpperCase()} */}
              <a href={`#`}>
                <button className="bg-transparent border-none p-0 text-black hover:text-green-500 transition duration-300 ease-in-out">
                  <FaChevronCircleRight className="text-lg md:text-xl lg:text-2xl" />
                </button>
              </a>
            </h2>
          </div>
          <div className="grid grid-cols-7">
            {products.data?.message?.map((product, i) => {
              return (
                <ProductCard
                  key={i}
                  product={{
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
