import { FaChevronCircleRight } from "react-icons/fa";
import { IoAdd } from "react-icons/io5";
import { Lato } from "next/font/google";
import Image from "next/image";

const lato = Lato({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

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
    { src: "/images/vegetables/potato.jpg", alt: "Aalo", name: "Potato/ आलू" },
    { src: "/images/vegetables/Onion.jpg", alt: "onion", name: "Onion/ प्याज" },
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
    { src: "/images/fruits/kiwi.jpg", alt: "kiwi", name: "Kiwi", price: 100 },
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
};

function ProductCard({ product }) {
  return (
    <div className="bg-white h-[12vw] w-[30%] md:w-[15%] mt-1">
      <Image
        src={product.src}
        alt={product.alt}
        width={280}
        height={240}
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
