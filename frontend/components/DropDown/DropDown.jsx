"use client";
import Link from "next/link";
import React, { useState } from "react";

function DropDown({ list }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative z-50 w-[8rem]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span>Categories</span>
      {isHovered === true ? (
        <ul
          style={{ display: isHovered ? "block" : "none" }}
          className="absolute bg-gray-100 z-50"
        >
          {list.map((item) => {
            return (
              <li className="border-b border-b-[#9a9898] py-1 px-2 text-sm">
                <Link href={`/products/category/${item._id}`}>{item.name}</Link>
              </li>
            );
          })}
        </ul>
      ) : (
        <></>
      )}
    </div>
  );
}

export default DropDown;
