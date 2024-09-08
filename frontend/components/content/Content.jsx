"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Breadcrumb from "../Breadcrumbs/Breadcrumb";
import { FaStar } from "react-icons/fa6";
import { BsCart2 } from "react-icons/bs";
import BASE_URL from "../../constants/constants";
import { setProducts as setStoreProducts } from "../../store/slice/productsSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decrementQuantity,
  deleteFromCart,
} from "../../store/slice/cartSlice";
import getToken from "utils/getToken";

function Content({ className }) {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [isFetched, setIsFetched] = useState(false);

  const isProductsStored = useSelector((state) => state.products.products);
  const isExistingProducts = isProductsStored && isProductsStored.length > 0;
  const quantity = useSelector((state) => state.cart.cart);
  console.log(quantity);
  useEffect(() => {
    // console.log("res", products);
    const fetchProducts = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/product/get-products`, {
          withCredentials: true,
        });
        // console.log(res.data.data.products);
        if (res.status === 200) {
          setProducts(res.data.data.products);
          dispatch(setStoreProducts(res.data.data.products));
          setIsFetched(true);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    if (!isExistingProducts && !isFetched) {
      fetchProducts();
    } else {
      setProducts(isProductsStored);
      setIsFetched(true);
    }
  }, [isExistingProducts, isFetched]);

  const handleAddToCart = async (product) => {
    dispatch(
      addToCart({
        _id: product._id,
        name: product.name,
        description: product.description,
        price: product.price,
        image: product.image,
      })
    );
    const qty = quantity.find((item) => {
      if (item._id === product._id) {
        return item.quantity;
      }
    });
    const res = await axios.post(
      `${BASE_URL}/cart/add-to-cart`,
      {
        product_id: product._id,
        quantity: qty?.quantity || 1,
      },
      {
        headers: {
          Authorization: `Bearer ${getToken("access_token")}`,
        },
      }
    );
    if (res.status === 201 || res.status === 200) {
      return alert("Successfully added to cart");
    } else {
      return alert("Failed to add item");
    }
  };

  return (
    <section className={className + " lg:px-5"}>
      <Breadcrumb pageName={"products"} />
      <p>
        Poco M-3 Showing results {products.length} of {products.length}
      </p>

      <ul className="flex gap-x-3 text-xs mt-3">
        <li className="cursor-pointer">Sort By</li>
        <li className="cursor-pointer">Popularity</li>
        <li className="cursor-pointer">Price Low to High</li>
        <li className="cursor-pointer">Newest First</li>
      </ul>

      <div className="my-8 flex flex-col gap-y-5">
        {products.map((product) => {
          // console.log(product);
          return (
            <div
              className="grid grid-cols-10 gap-x-4 border-t border-b border-stroke p-4"
              key={product._id}
            >
              <Image
                className="col-span-2 aspect-[4/3] object-center object-contain h-full w-full"
                src={product.image}
                width={200}
                height={80}
                alt={product.name}
              />
              <div className="col-span-5 text-sm flex flex-col">
                <p>{product.name}</p>
                <p className="flex gap-x-2 justify-start items-center pt-2">
                  <FaStar color="green" /> From {product.reviews} reviews
                </p>
                <p className="text-xs pt-2">{product.description}</p>
              </div>
              <div className="col-span-3 text-sm flex flex-col gap-y-3 justify-center items-center">
                <p>Price: ₹ {product.price}</p>
                <p>Category: {product.category_name}</p>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="bg-orange-600 w-1/2 py-2 flex justify-center items-center gap-x-2 text-white focus:outline-none active:scale-95 transition-transform duration-150"
                >
                  Add to Cart <BsCart2 color="white" fontSize="large" />
                </button>
                <button className="bg-orange-600 w-1/2 py-2 flex justify-center items-center gap-x-2 text-white focus:outline-none active:scale-95 transition-transform duration-150">
                  Buy Now
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Content;
