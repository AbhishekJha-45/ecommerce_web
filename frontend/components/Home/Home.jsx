import Image from "next/image";
import Link from "next/link";

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
                  src={
                    "/Logo/vecteezy_shopping-cart-full-of-food-and-drinks-and-supermarket_29628476.jpeg"
                  }
                  alt="Fresh groceries"
                  width={600}
                  height={400}
                  priority
                  className="rounded-lg shadow-xl object-contain"
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
  );
}
