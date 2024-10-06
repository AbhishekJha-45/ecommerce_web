"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ShoppingCart, Trash2, Plus, Minus } from "lucide-react";
import Cookies from "js-cookie";
import axios from "axios";
import BASE_URL from "constants/constants";

export default function Cart({ cartData }) {
  console.log("cart data", cartData.products);
  const [cartItems, setCartItems] = useState(cartData.products);
  const [subtotal, setSubtotal] = useState(0);

  const updateQuantity = async (id, change) => {
    const token = Cookies.get("access_token");
    setCartItems((prevItems) => {
      const updatedItems = prevItems.map((item) =>
        item.product._id === id
          ? { ...item, quantity: Math.max(0, item.quantity + change) }
          : item
      );
      return updatedItems;
    });
    const updatedItem = cartItems.find((item) => item.product._id === id);
    const updatedQuantity = Math.max(0, updatedItem.quantity + change);
    const payload = {
      product_id: id,
      quantity: updatedQuantity,
    };

    try {
      await axios.post(`${BASE_URL}/cart`, payload, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      console.error("Error updating quantity:", error);
    }
  };

  const removeItem = async (id) => {
    const token = Cookies.get("access_token");
    if (!token) {
      console.error("No token found");
      return;
    }

    try {
      await axios.delete(`${BASE_URL}/cart/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setCartItems((prevItems) =>
        prevItems.filter((item) => item.product._id !== id)
      );
    } catch (error) {
      console.error("Error removing item from cart:", error);
    }
  };

  const calculateSubtotal = () => {
    return cartItems.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0
    );
  };

  useEffect(() => {
    setSubtotal(calculateSubtotal());
  }, [cartItems]);

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Your Cart</h1>
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="p-6">
            <div className="flow-root">
              <ul role="list" className="-my-6 divide-y divide-gray-200">
                {cartItems.length > 0 ? (
                  cartItems.map((item) => (
                    <li key={item.product._id} className="py-6 flex">
                      <div className="flex-shrink-0 w-24 h-24 bg-gray-200 rounded-md overflow-hidden">
                        {item.product.image ? (
                          <Image
                            src={item.product.image}
                            alt={item.product.name}
                            width={96}
                            height={96}
                            className="w-full h-full object-center object-cover"
                          />
                        ) : (
                          <div className="h-full w-full flex items-center justify-center text-gray-400">
                            <ShoppingCart size={32} />
                          </div>
                        )}
                      </div>
                      <div className="ml-4 flex-1 flex flex-col">
                        <div>
                          <div className="flex justify-between text-base font-medium text-gray-900">
                            <h3>{item.product.name}</h3>
                            <p className="ml-4">
                              ${(item.product.price * item.quantity).toFixed(2)}
                            </p>
                          </div>
                          <p className="mt-1 text-sm text-gray-500">
                            {item.product.subCategory}
                          </p>
                        </div>
                        <div className="flex-1 flex items-end justify-between text-sm">
                          <div className="flex items-center">
                            <button
                              onClick={() =>
                                updateQuantity(item.product._id, -1)
                              }
                              className="text-gray-500 hover:text-gray-700"
                            >
                              <Minus size={18} />
                            </button>
                            <p className="text-gray-500 mx-2">
                              Qty {item.quantity}
                            </p>
                            <button
                              onClick={() =>
                                updateQuantity(item.product._id, 1)
                              }
                              className="text-gray-500 hover:text-gray-700"
                            >
                              <Plus size={18} />
                            </button>
                          </div>
                          <div className="flex">
                            <button
                              onClick={() => removeItem(item.product._id)}
                              type="button"
                              className="font-medium text-indigo-600 hover:text-indigo-500"
                            >
                              <Trash2 size={18} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))
                ) : (
                  <h2 className="my-5 text-center text-2xl">No items in cart</h2>
                )}
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
            <div className="flex justify-between text-base font-medium text-gray-900">
              <p>Subtotal</p>
              <p>${subtotal.toFixed(2)}</p>
            </div>
            <p className="mt-0.5 text-sm text-gray-500">
              Shipping and taxes calculated at checkout.
            </p>
            <div className="mt-6">
              <Link
                href="/cart/order/checkout"
                className="flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Checkout
              </Link>
            </div>
            <div className="mt-6 flex justify-center text-sm text-center text-gray-500">
              <p>
                or{" "}
                <Link
                  href="/"
                  className="text-indigo-600 font-medium hover:text-indigo-500"
                >
                  Continue Shopping<span aria-hidden="true"> &rarr;</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
