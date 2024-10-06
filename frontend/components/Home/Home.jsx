import Image from "next/image";
import Link from "next/link";

<<<<<<< HEAD
import ProductCard from "../../components/Common/Cards/ProductCard";

async function Home() {

  return (
    // <Suspense fallback={<>Loading...</>}>
    //   <div className="px-4 md:px-[2rem] bg-white-200">
    //     <div className="bg-slate-50 my-5 p-5">
    //       <div className="flex justify-between items-center px-3">
    //         <h2 className="flex font-bold text-black md:text-lg lg:text-xl  justify-between hover:underline underline-offset-8">
    //           Vegetables & Fruits
    //         </h2>
    //         <a href={`#`}>
    //           <button className="bg-transparent border-none p-0 text-black hover:text-green-500 transition duration-300 ease-in-out">
    //             <FaChevronCircleRight className="text-lg md:text-xl lg:text-2xl" />
    //           </button>
    //         </a>
    //       </div>
    //       <div className="grid -z-10 lg:grid-cols-7 xl:grid-cols-7 md:gap-y-3 flex-wrap md:grid-cols-3 grid-cols-1 gap-y-3 justify-center gap-x-3 mt-3">
    //         {products.data?.message?.length > 0 &&
    //           products.data?.message?.map((product, i) => {
    //             return (
    //               <ProductCard
    //                 key={i}
    //                 product={{
    //                   id: product._id,
    //                   name: product.name,
    //                   price: product.price,
    //                   image: product.image,
    //                 }}
    //               />
    //             );
    //           })}
    //       </div>
    //     </div>
    //   </div>

    //   <div className="threeBox flex flex-wrap items-center justify-evenly md:h-[30vw] mt-5">
    //     {/* 1st box */}
    //     <div className="bg-slate-200 w-full md:w-[30%] md:h-full flex flex-col p-2 gap-2">
    //       <div className="flex font-bold text-black md:text-lg lg:text-xl justify-between underline px-1">
    //         NAMKEENS
    //         <a
    //           href="/namkeen"
    //           className="bg-transparent border-none p-0 text-black hover:text-green-500 transition duration-300 ease-in-out"
    //         >
    //           <FaChevronCircleRight className="text-lg md:text-xl lg:text-2xl" />
    //         </a>
    //       </div>
    //       <div className="h-full mt-2 flex gap-2">
    //         <div className="bg-white h-[50%] w-[50%] mt-[25%] flex items-center justify-around contain-content">
    //           <Image
    //             src="/images/namkeens/haldiram-all-in-one.png"
    //             // layout="resposnive"
    //             alt="Haldiram All-in-One"
    //             width={280}
    //             height={240}
    //             className="h-full w-full object-contain hover:scale-105 transition-all duration-200"
    //           />
    //         </div>
    //         <div className="flex flex-col w-[50%] gap-2">
    //           <div className="bg-white h-[44%] flex items-center justify-around contain-content">
    //             <Image
    //               src="/images/namkeens/kuch-kuch-400-gm-pouch.png"
    //               // layout="resposnive"
    //               alt="Kuch Kuch"
    //               width={280}
    //               height={240}
    //               className="h-full w-full object-contain hover:scale-105 transition-all duration-200"
    //             />
    //           </div>
    //           <div className="bg-white h-[44%] flex items-center justify-around contain-content ">
    //             <Image
    //               src="/images/namkeens/bikaji-bhujiya.jpg"
    //               // layout="resposnive"
    //               alt="Bikaji Bhujiya"
    //               width={280}
    //               height={240}
    //               className="h-full w-full object-contain hover:scale-105 transition-all duration-200"
    //             />
    //           </div>
    //         </div>
    //       </div>
    //     </div>

    //     {/* second box */}
    //     <div className="bg-slate-200 w-full md:w-[30%] md:h-full flex flex-col p-2 gap-2">
    //       <div className="flex font-bold text-black md:text-lg lg:text-xl justify-between underline px-1">
    //         DRY FRUITS
    //         <a
    //           href="/dry-fruits"
    //           className="bg-transparent border-none p-0 text-black hover:text-green-500 transition duration-300 ease-in-out"
    //         >
    //           <FaChevronCircleRight className="text-lg md:text-xl lg:text-2xl" />
    //         </a>
    //       </div>
    //       <div className="flex gap-2 h-[50%]">
    //         <div className="bg-white flex items-center justify-around w-[50%] contain-content">
    //           <Image
    //             src="/images/dry-fruits/almonds.png"
    //             // layout="resposnive"
    //             alt="Almonds"
    //             width={280}
    //             height={240}
    //             className="h-full w-full object-contain hover:scale-105 transition-all duration-200"
    //           />
    //         </div>
    //         <div className="bg-white flex items-center justify-around w-[50%]">
    //           <Image
    //             src="/images/dry-fruits/cashew.png"
    //             // layout="resposnive"
    //             alt="Cashews"
    //             width={280}
    //             height={240}
    //             className="h-full w-full object-contain hover:scale-105 transition-all duration-200"
    //           />
    //         </div>
    //       </div>
    //       <div className="flex gap-2 h-[50%]">
    //         <div className="bg-white flex items-center justify-around w-[50%] mt-2 md:mt-0 contain-content">
    //           <Image
    //             src="/images/dry-fruits/walnuts.png"
    //             // layout="resposnive"
    //             alt="Cashews"
    //             width={280}
    //             height={240}
    //             className="h-full w-full object-contain hover:scale-105 transition-all duration-200"
    //           />
    //         </div>
    //         <div className="bg-white flex items-center justify-around w-[50%] mt-2 md:mt-0 contain-content">
    //           <Image
    //             src="/images/dry-fruits/raisins.png"
    //             // layout="resposnive"
    //             alt="Cashews"
    //             width={280}
    //             height={240}
    //             className="h-full w-full object-contain hover:scale-105 transition-all duration-200"
    //           />
    //         </div>
    //       </div>
    //     </div>

    //     {/* 3rd box */}
    //     <div className="bg-slate-200 w-full md:w-[30%] md:h-full flex flex-col p-2 gap-2">
    //       <div className="flex font-bold text-black md:text-lg lg:text-xl justify-between underline px-1">
    //         DAIRY PRODUCTS
    //         <a
    //           href="dairy"
    //           className="bg-transparent border-none p-0 text-black hover:text-green-500 transition duration-300 ease-in-out"
    //         >
    //           <FaChevronCircleRight className="text-lg md:text-xl lg:text-2xl" />
    //         </a>
    //       </div>
    //       <div className="h-full mt-2 flex gap-2">
    //         <div className="bg-white h-[50%] w-[50%] mt-[25%] flex items-center justify-around contain-content">
    //           <Image
    //             src="/images/dairy/paneer.png"
    //             // layout="resposnive"
    //             alt="Paneer"
    //             width={280}
    //             height={240}
    //             className="h-full w-full object-contain hover:scale-105 transition-all duration-200"
    //           />
    //         </div>
    //         <div className="flex flex-col w-[50%] gap-2">
    //           <div className="bg-white h-[50%] flex items-center justify-around contain-content">
    //             <Image
    //               src="/images/dairy/milk.jpg"
    //               // layout="resposnive"
    //               alt="Amul Milk"
    //               width={280}
    //               height={240}
    //               className="h-full w-full object-contain hover:scale-105 transition-all duration-200"
    //             />
    //           </div>
    //           <div className="bg-white h-[50%] flex items-center justify-around contain-content">
    //             <Image
    //               src="/images/dairy/amul-butter.jpg"
    //               // layout="resposnive"
    //               alt="Butter"
    //               width={280}
    //               height={240}
    //               className="h-full w-full object-contain hover:scale-105 transition-all duration-200"
    //             />
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    //   <div className="w-full h-44 mt-20 flex gap-3 px-9">
    //     <div className="bg-green-400 w-[15%] ">1</div>
    //     <div className="bg-teal-500 w-[15%] ">2</div>
    //     <div className="bg-cyan-500 w-[15%]">3</div>
    //     <div className="bg-red-400 w-[15%]">4</div>
    //     <div className="bg-purple-400 w-[15%]">5</div>
    //     <div className="bg-pink-200 w-[15%]">6</div>
    //     <div className="bg-slate-400 w-[15%]">7 </div>
    //     <div className="bg-orange-400 w-[15%]">8 </div>
    //   </div>

    //   {/* <div className="h-[20vw]"></div> */}
    // </Suspense>
    <>hello</>
=======
export default function Home() {
  const categories = [
    {
      name: "Fruits & Vegetables",
      image: "/images/Categories/fruits&vegetables.jpg",
    },
    {
      name: "Masala & Oils",
      image: "/images/Categories/masala_oils.jpg",
    },
    {
      name: "Dairy & Eggs",
      image: "/images/Categories/milk_bread_egg.svg",
    },
    {
      name: "Bakery",
      image: "/images/Categories/bread.webp",
    },
    {
      name: "Bhujiya & Mixtures",
      image: "/images/Categories/bhujiya_mixture.jpg",
    },
    {
      name: "Cold Drinks & Juices ",
      image: "/images/Categories/cold_drinks.webp",
    },
    {
      name: "Chicken & Fish",
      image: "/images/Categories/chicken.png",
    },

    {
      name: "Personal Care",
      image: "/images/Categories/personal_care.webp",
    },
    // {
    //   name: "Household Supplies",
    //   image: "/images/Categories/household_supplies.avif",
    // },
    // {
    //   name: "Frozen Foods",
    //   image: "/images/Categories/frozen_foods.avif",
    // },
    {
      name: "Ice-Creams",
      image: "/images/Categories/ice_creams.jpg",
    },
    {
      name: "Baby Care",
      image: "/images/Categories/baby_care.webp",
    },
    // {
    //   name: "Pet Supplies",
    //   image: "/images/Categories/pet_supplies.avif",
    // },
    {
      name: "Health & Wellness",
      image: "/images/Categories/health_wellness.webp",
    },
    // {
    //   name: "International Foods",
    //   image: "/images/Categories/international_foods.avif",
    // },
  ];

  return (
    <div className="min-h-screen flex flex-col ">
      <main className="flex-grow">
        <section className="bg-green-100 py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h1 className="text-4xl md:text-6xl font-bold text-green-800 mb-4">
                  Fresh Groceries Delivered Fast
                </h1>
                <p className="text-xl text-green-700 mb-6">
                  Get your daily essentials delivered to your doorstep in
                  minutes!
                </p>
                <button className="bg-green-500 text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-green-600 transition duration-300">
                  Shop Now
                </button>
              </div>
              <div className="md:w-1/2">
                <Image
                  src="/placeholder.svg"
                  alt="Fresh groceries"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CATEGORY SECTION */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">
              Popular Categories
            </h2>
            <div className="relative">
              <div className="overflow-x-auto pb-4 scrollbar-hide">
                <div className="flex space-x-4 w-max">
                  {categories.map((category, i) => (
                    <div
                      key={i}
                      className="bg-white rounded-lg shadow-md p-4 text-center hover:shadow-lg transition duration-300 flex-shrink-0 w-40"
                    >
                      <Image
                        src={category.image}
                        alt={category.name}
                        width={200}
                        height={100}
                        className="mx-auto mb-4 rounded-lg cursor-pointer"
                      />
                      <h3 className="font-semibold">{category.name}</h3>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute top-0 bottom-0 left-0 bg-gradient-to-r from-white to-transparent w-8"></div>
              <div className="absolute top-0 bottom-0 right-0 bg-gradient-to-l from-white to-transparent w-8"></div>
            </div>
          </div>
        </section>

        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">
              Featured Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                {
                  name: "Fresh Apples",
                  price: "$2.99",
                  image: "/images/featured-products/apples.jpg",
                },
                {
                  name: "Amul Taza",
                  price: "Rs 34",
                  image: "/images/featured-products/amul-taza.webp",
                },
                {
                  name: "Aashirwad Aata",
                  price: "Rs 300",
                  image: "/images/featured-products/aasirwad-aata.webp",
                },
                {
                  name: "Vadilal Ice Cream",
                  price: "Rs 250",
                  image: "/images/featured-products/vadilal-rajbhog-kulfi.jpg",
                },
                {
                  name: "Vadilal Ice Cream",
                  price: "Rs 250",
                  image: "/images/featured-products/vadilal-rajbhog-kulfi.jpg",
                },
              ].map((product) => (
                <div
                  key={product.name}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300"
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={200}
                    height={100}
                    className="w-full object-scale-down object-center aspect-[16/9]"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold mb-2">{product.name}</h3>
                    <p className="text-green-600 font-bold">{product.price}</p>
                    <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-green-600 transition duration-300 w-full">
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
>>>>>>> origin/main
  );
}
