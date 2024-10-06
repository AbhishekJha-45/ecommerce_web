import React from "react";
import { FaChevronCircleRight } from "react-icons/fa";

const categories = [
  { name: "Dairy, Bread & Eggs", href: "/dairy-bread-eggs" },
  { name: "Fruits & Vegetables", href: "/fruits-vegetables" },
  { name: "Cold drinks & Juices", href: "/cold-drinks-juices" },
  { name: "Snacks", href: "/snacks" },
  { name: "Chocolate & IceCream", href: "/chocolate-icecream" },
  { name: "Biscuits & bakery", href: "/biscuits-bakery" },
  { name: "Tea, Coffee & healthy Drinks", href: "/tea-coffee-healthy-drinks" },
  { name: "Atta, Rice & dal", href: "/atta-rice-dal" },
  { name: "Masala, Oil & More", href: "/masala-oil-more" },
];

function Category() {
  return (
    <>
      <div className="category-container bg-slate-500">
              <div className="box">
              <img src="/ecommerce_web/frontend/public/images/Categories/dairy_bread_eggs.avif" alt="" />
              </div>
              <div className="box">
                  <img src="/ecommerce_web/frontend/public/images/Categories/fruits_vegetables.avif" alt="" />
              </div>
                <div className="box">
                  <img src="/ecommerce_web/frontend/public/images/Categories/cold_drinks_juices.avif" alt="" />
              </div>
                <div className="box">
                  <img src="/ecommerce_web/frontend/public/images/Categories/snacks.avif" alt="" />
              </div>
                <div className="box">
                  <img src="/ecommerce_web/frontend/public/images/Categories/chocolate_icecream.avif" alt="" />
              </div>
                <div className="box">
                  <img src="/ecommerce_web/frontend/public/images/Categories/biscuits_bakery.avif" alt="" />
              </div>
                <div className="box">
                  <img src="/ecommerce_web/frontend/public/images/Categories/tea_coffee_healthy_drinks.avif" alt="" />
              </div>
                <div className="box">
                  <img src="/ecommerce_web/frontend/public/images/Categories/atta_rice_dal.avif" alt="" />
              </div>
                <div className="box">
                  <img src="/ecommerce_web/frontend/public/images/Categories/masala_oil_more.avif" alt="" />
              </div>
              
        
      </div>
    </>
  );
}

export default Category;
