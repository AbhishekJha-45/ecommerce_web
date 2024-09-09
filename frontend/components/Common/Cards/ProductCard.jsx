"use client";
import Image from "next/image";
import card from "../../../style/card.module.css";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
import { BsCart4 } from "react-icons/bs";
import { useState } from "react";
function ProductCard({ product }) {
  if (!product) {
    return null;
  }
  const [selectedProduct, setSelectedProduct] = useState(null);
  const handleAddToCart = () => {
    if (selectedProduct) {
      setSelectedProduct({
        ...selectedProduct,
        quantity: selectedProduct.quantity + 1,
      });
    } else {
      setSelectedProduct({ id: product.id, quantity: 1 });
    }
  };

  const handleIncrement = () => {
    setSelectedProduct({
      ...selectedProduct,
      quantity: selectedProduct.quantity + 1,
    });
  };

  const handleDecrement = () => {
    if (selectedProduct.quantity > 1) {
      setSelectedProduct({
        ...selectedProduct,
        quantity: selectedProduct.quantity - 1,
      });
    } else {
      setSelectedProduct(null);
    }
  };
  return (

    <div className={` w-full bg-slate-100 shadow-md p-3`}>
      <div className="max-h-[6rem] mb-1 overflow-hidden object-contain">
    <div className={`${card.card} col-span-1 w-full`}>
      <div className={card.image_container}>
        <Image
          src={product.image}
          width={300}
          height={300}
          alt="phomtu"
          className="object-contain w-full hover:scale-105 transition-all duration-500"
        />
      </div>
       <span>{product.name}</span>
      
      <div className={`flex justify-between items-center`}>
        <div className={`text-xl font-semibold`}>
          className="object-fill w-full hover:scale-105 transition-all duration-500"
        />
      </div>
      <div className={card.title}>
        <span>{product.name}</span>
      </div>
      <div className={`flex justify-between items-center`}>
        <div className={card.price}>
          <span>
            <span className="text-lg">&#8377;</span>
            {" " + product.price}
          </span>
        </div>
        {selectedProduct !== null ? (
          <div className="flex justify-center items-center text-lg gap-x-2">
            <button
              className="outline outline-1 outline-black p-1 active:scale-95"
              onClick={() => handleDecrement(product.id)}
              >
              <FiMinus />
            </button>
            <span>{selectedProduct && selectedProduct.quantity}</span>
            <button
              className="outline outline-1 outline-black p-1 active:scale-95"
              onClick={() => handleIncrement(product.id)}
            >
              <GoPlus />
            </button>
          </div>
        ) : (
          <button
            className="rounded-md text-sm p-1 active:scale-95 shadow-lg flex justify-center items-center gap-x-2"
            onClick={() => handleAddToCart(product.id)}
          >
            Add <BsCart4 />
          </button>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
