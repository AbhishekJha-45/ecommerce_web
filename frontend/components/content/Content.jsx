"use client";

import { useState, useEffect } from "react";
import { ShoppingCart } from "lucide-react";

export default function page({ data }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [sortOption, setSortOption] = useState("featured");
  const [cart, setCart] = useState([]);

  const categories = [
    "All",
    ...new Set(data.map((product) => product.category.name)),
  ];
  const brands = [...new Set(data.map((product) => product.brand))];

  const filteredProducts = data
    .filter((product) => {
      const categoryMatch =
        selectedCategory === "All" ||
        product.category.name === selectedCategory;
      const brandMatch =
        selectedBrands.length === 0 || selectedBrands.includes(product.brand);
      const priceMatch =
        product.price >= priceRange[0] && product.price <= priceRange[1];
      return categoryMatch && brandMatch && priceMatch;
    })
    .sort((a, b) => {
      switch (sortOption) {
        case "priceLowToHigh":
          return a.price - b.price;
        case "priceHighToLow":
          return b.price - a.price;
        default:
          return 0;
      }
    });

  const toggleBrand = (brand) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item._id === product._id);
      if (existingItem) {
        return prevCart.map((item) =>
          item._id === product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const cartItemsCount = cart.reduce((total, item) => total + item.quantity, 0);

  const handlePriceRangeChange = (index, value) => {
    setPriceRange((prev) => {
      const newRange = [...prev];
      newRange[index] = Number(value);
      return newRange;
    });
  };

  return (
    <div className="flex bg-gray-100 min-h-screen">
      {/* Filters Sidebar */}
      <div className="w-64 bg-white p-6 shadow-lg">
        <h2 className="text-2xl font-bold mb-6">Filters</h2>

        {/* Category Filter */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Category</h3>
          <div className="space-y-2">
            {categories.map((category) => (
              <label key={category} className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="category"
                  value={category}
                  checked={selectedCategory === category}
                  onChange={() => setSelectedCategory(category)}
                  className="form-radio text-indigo-600"
                />
                <span>{category}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Brand Filter */}
        {brands.length > 1 && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Brand</h3>
            <div className="space-y-2">
              {brands.map((brand) => (
                <label key={brand} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={selectedBrands.includes(brand)}
                    onChange={() => toggleBrand(brand)}
                    className="form-checkbox text-indigo-600"
                  />
                  <span>{brand}</span>
                </label>
              ))}
            </div>
          </div>
        )}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Price Range</h3>
          <div className="flex flex-col space-y-2">
            <label className="flex items-center justify-between">
              <span>Min:</span>
              <input
                type="number"
                min="0"
                max={priceRange[1]}
                value={priceRange[0]}
                onChange={(e) => handlePriceRangeChange(0, e.target.value)}
                className="w-20 px-2 py-1 border rounded"
              />
            </label>
            <label className="flex items-center justify-between">
              <span>Max:</span>
              <input
                type="number"
                min={priceRange[0]}
                max="1000"
                value={priceRange[1]}
                onChange={(e) => handlePriceRangeChange(1, e.target.value)}
                className="w-20 px-2 py-1 border rounded"
              />
            </label>
          </div>
          <div className="mt-2 flex justify-between text-sm text-gray-600">
            <span>₹{priceRange[0]}</span>
            <span>₹{priceRange[1]}</span>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="flex-1 p-8 overflow-y-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Our Products</h1>
          <div className="flex items-center space-x-4">
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="border rounded-md px-2 py-1"
            >
              <option value="featured">Featured</option>
              <option value="priceLowToHigh">Price: Low to High</option>
              <option value="priceHighToLow">Price: High to Low</option>
            </select>
            <div className="relative">
              <ShoppingCart className="h-8 w-8 text-indigo-600" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                  {cartItemsCount}
                </span>
              )}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product._id}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.category.name}</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-bold text-indigo-600">
                    ₹{product.price.toFixed(2)}
                  </span>
                  <div className="text-sm text-gray-500">
                    {/* Stock: {product.stock} */}
                    {product.stock > 0 ? (
                      product.stock < 11 ? (
                        <p className="text-[red]">Only Few Items Left</p>
                      ) : (
                        "In Stock"
                      )
                    ) : (
                      "Out of Stock"
                    )}
                  </div>
                </div>
                <button
                  onClick={() => addToCart(product)}
                  disabled={product.stock === 0}
                  className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors duration-300 flex items-center justify-center"
                >
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
