"use client";
import axios from "axios";
import Cart from "../../components/Products/Cart/Cart";
import BASE_URL from "constants/constants";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
function Page() {
  const [cartData, setCartData] = useState(null);
  const router = useRouter();
  const fetchCart = async (token) => {
    if (!token) return;
    const res = await axios.get(`${BASE_URL}/cart`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (res.status === 401) {
      console.error("Error fetching cart data");
      router.push("/auth/login");
      return;
    }
    if (res.status === 200) {
      setCartData(res.data?.data?.cart);
    }
  };

  useEffect(() => {
    const token = Cookies.get("access_token");
    fetchCart(token);
  }, []);

  return cartData ? <Cart cartData={cartData} /> : <div>Loading...</div>;
}

export default Page;
