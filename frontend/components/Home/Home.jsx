import React from "react";
import useState from "react";
import { FaChevronCircleRight } from "react-icons/fa";
import { IoAdd } from "react-icons/io5";
import { Lato } from "next/font/google";
import Image from "next/image";

const lato = Lato({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

//Images:---

import brinjal from "/public/brinjal.jpg";
import ladyfinger from "/public/lady_finger.jpg";
import tomato from "/public/tomatoes.jpg";
import cauliFlower from "/public/cauliflower.jpg";
import potato from "/public/potato.jpg";
import onion from "/public/onion.jpg";
import papaya from "/public/fruits/papaya.jpg";
import apple from "/public/fruits/apple.jpg";
import banana from "/public/fruits/banana.jpg";
import kiwi from "/public/fruits/kiwi.jpg";
import pineapple from "/public/fruits/pineapple.jpg";
import oranges from "/public/fruits/oranges.jpg";

const images = {
  vegetables: [
    { src: brinjal, alt: "brinjal", name: "Eggplant/Brinjal/ बैगन" },
    { src: ladyfinger, alt: "ladyfinger", name: "Okra/ भिंडी" },
    { src: tomato, alt: "tomatoes", name: "Tomato/ टमाटर" },
    { src: cauliFlower, alt: "Gobhi", name: "Cauliflower/फूलगोभी" },
    { src: potato, alt: "Aalo", name: "Potato/ आलू" },
    { src: onion, alt: "onion", name: "Onion/ प्याज" },
  ],
  fruits: [
    { src: papaya, alt: "papaya", name: "Papaya/Papita", price: 20 },
    { src: apple, alt: "apple", name: "Apple/Seb", price: 200 },
    { src: banana, alt: "banana", name: "Banana", price: 15 },
    { src: kiwi, alt: "kiwi", name: "Kiwi", price: 100 },
    { src: pineapple, alt: "pineapple", name: "Pineapple", price: 300 },
    { src: oranges, alt: "oranges", name: "Oranges", price: 90 },
  ],
};

function ProductCard({ product }) {
  return (
    <div className="bg-white h-[12vw] w-[30%] md:w-[15%] mt-1">
      <Image
        src={product.src}
        alt={product.alt}
        className="h-full w-full object-contain hover:scale-105 transition-all duration-200"
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

function Home() {
  return (
    <div className="px-4 md:px-[2rem] bg-white-200">
      {["vegetables", "fruits"].map((category, index) => (
        <div key={index} className="bg-slate-100 h-auto md:h-[24vw] mt-5 p-3">
          <div className="pb-1 md:pb-2 lg:pb-4 px-6">
            <h2 className="flex font-bold text-black md:text-lg lg:text-xl justify-between">
              {category.toUpperCase()}
              <a href={`/${category}`}>
                <button className="bg-transparent border-none p-0 text-black hover:text-green-500 transition duration-300 ease-in-out">
                  <FaChevronCircleRight className="text-lg md:text-xl lg:text-2xl" />
                </button>
              </a>
            </h2>
          </div>
          <div className="flex flex-wrap items-center justify-around px-5 gap-3">
            {images[category].map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
