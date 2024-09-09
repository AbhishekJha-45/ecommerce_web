"use client";
// import { useEffect, useState } from "react";
import { Lato } from "next/font/google";
import { IoAdd, IoRemove } from "react-icons/io5";
import Image from "next/image";

const lato = Lato({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});
export default function ProductCard({ product }) {
  const { name, price, image } = product;

  // const [quantity, setQuantity] = useState(0);

  // const handleAddClick = () => {
  //   setQuantity(1);
  // };
  // const handleIncrement = () => {
  //   setQuantity(quantity + 1);
  // };

  // const handleDecrement = () => {
  //   if (quantity > 1) {
  //     setQuantity(quantity - 1);
  //   } else {
  //     setQuantity(0);
  //   }
  // };

  return (
    <div className="flex flex-col ">
      <div className="w-full aspect-video">
        <Image src={image} width={221} height={200} alt={ name} className="aspect-video object-center object-contain"/>
      </div>
      <h3>{name}</h3>
      <p>{price}</p>
    </div>
  );
}

{
  /* <Image
        src={image}
        layout="resposnive"
        alt={name}
        width={221}
        height={203}
        className="h-full w-full object-contain hover:scale-105 transition-all duration-200 "
      />

      <div className="product-info mt-2">
        <h2 className="product-name font-bold mt-0">
          <a href="/products/Brinjal">{name}</a>
        </h2>
        <div className="product-details">
          <p className={lato.className}>
            Per 250gm
            <br />₹ {price || 10}
          </p>
        </div>
        {/* <button className="text-green-600 border border-green-600 hover:bg-green-200 w-[35%] font-bold flex justify-around items-center rounded">
          Add <IoAdd />
        </button> */
}
// {quantity === 0 ? (
//   <button
//     onClick={handleAddClick}
//     className="text-green-600 border border-green-600 hover:bg-green-200 w-[35%] font-bold flex justify-around items-center rounded"
//   >
//     Add <IoAdd />
//   </button>
// ) : (
//   <div className="flex items-center bg-green-700 w-[35%] justify-around rounded">
//     <button
//       onClick={handleDecrement}
//       className="text-white font-extrabold flex justify-around items-center"
//     >
//       <IoRemove />
//     </button>
//     <span className="mx-2 text-white">{quantity}</span>
//     <button
//       onClick={handleIncrement}
//       className="text-white font-bold flex justify-around items-center"
//     >
//       <IoAdd />
//     </button>
//   </div>
// )}
// </div> */}
