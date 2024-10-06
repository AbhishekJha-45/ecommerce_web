"use client";
import Image from "next/image";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
import { BsCart4 } from "react-icons/bs";
import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import BASE_URL from "constants/constants";
function ProductCard({ product }) {
  if (!product) {
    return null;
  }
  const [selectedProduct, setSelectedProduct] = useState(null);
  const handleAddToCart = async (id) => {
    const access_token = Cookies.get("access_token");
    if (!access_token) {
      return alert("Please Login To add");
    }
    const res = await axios.post(
      `${BASE_URL}/cart/add-to-cart`,
      { product_id: id, quantity: 1 },
      { headers: { Authorization: `Bearer ${access_token}` } }
    );

    if (res.status === 201) {
      if (selectedProduct) {
        setSelectedProduct({
          ...selectedProduct,
          quantity: selectedProduct.quantity + 1,
        });
      } else {
        setSelectedProduct({ id: product.id, quantity: 1 });
      }
      return ;
    }
    return alert("Oops Something Went Wrong");
  };

  return (
    <div className={` w-full bg-slate-100 shadow-md p-3 max-w-[222px]`}>
      <div className="max-h-[6rem] mb-1 overflow-hidden object-contain">
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
          <span>
            <span className="text-lg">&#8377;</span>
            {" " + product.price}
          </span>
        </div>
        {selectedProduct !== null ? (
          <div className="flex justify-center items-center text-lg gap-x-2">
            <button
              className="outline outline-1 outline-black p-1 active:scale-95"
              onClick={() => handleAddToCart(product.id)}
            >
              <FiMinus />
            </button>
            <span>{selectedProduct && selectedProduct.quantity}</span>
            <button
              className="outline outline-1 outline-black p-1 active:scale-95"
              onClick={() => handleAddToCart(product.id)}
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
