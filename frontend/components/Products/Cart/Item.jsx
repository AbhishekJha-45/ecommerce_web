"use client";
import Image from "next/image";
import { RxCross1 } from "react-icons/rx";
import { deleteFromCart, updateCartItem } from "../../../store/slice/cartSlice";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import axios from "axios";
import BASE_URL from "constants/constants";
import getToken from "utils/getToken";
function Item({ cart }) {
  const dispatch = useDispatch();
  const access_token = getToken("access_token");
  // console.log(access_token);
  const handleDelete = async (product_id) => {
    if (!access_token) {
      alert("Access token required");
    }
    const res = await axios.post(
      `${BASE_URL}/cart/remove-from-cart`,
      { product_id },
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    );
    if (res.status === 200) {
      dispatch(deleteFromCart({ _id: product_id }));
    } else {
      alert("Something went wrong");
    }
  };
  return (
    <>
      {cart.map((item) => {
        const { product, quantity } = item;
        console.log("from items page", product);
        return (
          <div
            className="relative lg:grid grid-cols-11 w-full outline outline-1 outline-[#e0e0e0]"
            key={product._id}
          >
            <div className="col-span-4 py-3  px-3 w-full">
              <Image
                src={product.image}
                width={300}
                height={218}
                alt="Item Image"
                className="object-contain object-center  w-full h-auto aspect-[4/3] max-h-[300px]"
              />
            </div>
            <div className="relative col-span-7 outline outline-1 outline-[#e0e0e0] py-5 lg:pl-5 px-3 flex flex-col gap-y-1">
              <h3 className="font-semibold text-base">{product.name}</h3>
              <p className="text-sm">{product.description}</p>
              <p className="text-sm">₹ {product.price}</p>
              <div className="flex gap-x-3 py-1 px-2 bg-gray-200 w-fit">
                <button
                  type="button"
                  className="shadow-xl shadow-gray-300 rounded-md p-1"
                  onClick={() => {
                    dispatch(
                      updateCartproduct({
                        product_id: product.product_id,
                        product_id: product.product_id,
                        quantity: quantity - 1,
                      })
                    );
                    // calculateTotal();
                  }}
                >
                  <FaMinus />
                </button>
                <p className="px-2 text-sm">{quantity}</p>
                <button
                  type="button"
                  className="shadow-xl shadow-gray-300 rounded-md p-1"
                  onClick={() => {
                    dispatch(
                      updateCartItem({
                        item_id: item.item_id,
                        product_id: item.product_id,
                        quantity: item.quantity + 1,
                      })
                    );
                    // calculateTotal();
                  }}
                >
                  <FaPlus />
                </button>
              </div>
              <div>
                <p className="text-sm">14 days Return available</p>
                <p className="text-sm">Delivery by 14 Nov</p>
              </div>
            </div>
            <button
              type="button"
              className="absolute right-3 lg:top-2 top-60"
              onClick={() => handleDelete(product._id)}
            >
              <RxCross1 />
            </button>
          </div>
        );
      })}
    </>
  );
}

export default Item;
