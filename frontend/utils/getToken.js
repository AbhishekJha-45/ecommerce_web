"use client";
import Cookies from "js-cookie";
export default function getToken(name) {
  if (typeof window !== "undefined") {
    return Cookies.get(name);
  }
  return null;
}
