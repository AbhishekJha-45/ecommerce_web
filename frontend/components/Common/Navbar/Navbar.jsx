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
import { Search } from "lucide-react";
function Navbar({ categories }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const user = useSelector((state) => state.auth.user);
  console.log(user);
  const cart = useSelector((state) => state.cart.cart);
  function SearchBar() {
    return (
      <div className="search-container">
        <input type="text" placeholder="Search..." />
        <Search size={20} color="#000000" />
      </div>
    );
  }
  return (
    <>
      {/* <header className="bg-green-500 text-white">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold ">
            ApnaBazar
          </Link>
          <nav className="hidden md:flex space-x-4 font-bold">
            <Link href="#" className="hover:text-green-200 ">
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

            <div className="relative flex">
              <input
                type="text"
                placeholder="Search products..."
                className="pl-10 pr-4 py-2 rounded-full bg-green-600 text-white placeholder-green-200 focus:outline-none focus:ring-2 focus:ring-green-300 w-64"
              />
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-200"
                size={20}
              />
            </div>
          </nav>
          <div className="flex items-center space-x-4">
            {user !== null ? (
              <>
                <button
                  onClick={() => {
                    dispatch(logoutAsync());
                    window.location.href = "/";
                  }}
                  className="bg-white text-green-500 px-4 py-2 rounded-full font-semibold hover:bg-green-100"
                >
                  Sign Out
                </button>
                <div className="">
                  <Image
                    src={user.avatar}
                    width={30}
                    height={30}
                    className="rounded-full h-10 w-10"
                    alt="User Avatar"
                  />
                </div>
              </>
            ) : (
              <button
                onClick={() => {
                  window.location.href = "/auth/login";
                }}
                className="bg-white text-green-500 px-4 py-2 rounded-full font-semibold hover:bg-green-100"
              >
                Sign In
              </button>
            )}
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
      </header> */}
      <header className="bg-green-500 text-white ">
        <div className="container mx-auto p-4 flex items-center justify-between md:justify-start">
          <Link
            href="/"
            // className={`text-2xl font-bold md:text-3xl `}
            className={`${aloha.className} font-semibold text-2xl`}
          >
            ApnaBazar
          </Link>
          <nav className="hidden md:flex space-x-4 font-bold pl-16">
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
          <div className="relative flex items-center md:ml-auto">
            <input
              type="text"
              placeholder="Search products..."
              className="pl-10 pr-4 py-2 rounded-full bg-green-600 text-white placeholder-green-200 focus:outline-none focus:ring-2 focus:ring-green-300 w-64 md:w-96"
            />
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-200"
              size={20}
            />
          </div>
          <div className="flex items-center space-x-4 md:ml-auto">
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
