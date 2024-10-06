"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaRegHeart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { menuItems } from "./data";
import { useSelector } from "react-redux";
import DropdownUser from "./DropdownUser";
function Navbar({ categories }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const user = useSelector((state) => state.auth.user);
  const cart = useSelector((state) => state.cart.cart);

  return (
    <>
      <header className="bg-green-500 text-white">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            QuickMart
          </Link>
          <nav className="hidden md:flex space-x-4">
            <Link href="#" className="hover:text-green-200">
              Home
            </Link>
            <Link href="#" className="hover:text-green-200">
              Categories
            </Link>
            <Link href="#" className="hover:text-green-200">
              Offers
            </Link>
            <Link href="#" className="hover:text-green-200">
              Contact
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <button className="bg-white text-green-500 px-4 py-2 rounded-full font-semibold hover:bg-green-100">
              Sign In
            </button>
            <button className="md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
