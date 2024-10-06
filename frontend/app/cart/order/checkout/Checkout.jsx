"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import axios from "axios"; // For making API requests
import Cookies from "js-cookie"; // For fetching the token
import BASE_URL from "constants/constants";

export default function Checkout() {
  const [addresses, setAddresses] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [newAddress, setNewAddress] = useState({
    name: "",
    phone: "",
    street: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
  });

  // Fetch addresses on component mount
  useEffect(() => {
    const fetchAddresses = async () => {
      try {
        const token = Cookies.get("access_token");
        const response = await axios.get(`${BASE_URL}/address`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        // Updated to access the correct data structure
        setAddresses(response.data.data);
        if (response.data.data.length > 0) {
          setSelectedAddress(response.data.data[0]);
        }
      } catch (error) {
        console.error("Error fetching addresses", error);
      }
    };

    fetchAddresses();
  }, []);

  const handleAddressChange = (addressId) => {
    const selected = addresses.find((addr) => addr._id === addressId);
    if (selected) {
      setSelectedAddress(selected);
      setShowAddressForm(false);
    }
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setNewAddress((prevAddress) => ({ ...prevAddress, [name]: value }));
  };

  const handleAddAddress = async () => {
    try {
      const token = Cookies.get("access_token");
      const response = await axios.post(`${BASE_URL}/address`, newAddress, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setAddresses([...addresses, response.data.data]); // Updated to match the structure
      setShowAddressForm(false);
    } catch (error) {
      console.error("Error adding address", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h1>
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="p-6">
            <form>
              <div className="mb-6">
                <h2 className="text-lg font-medium text-gray-900 mb-4">
                  Shipping Information
                </h2>
                {addresses.length > 0 && (
                  <div className="mb-4">
                    <label
                      htmlFor="address-select"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Select Address
                    </label>
                    <div className="relative">
                      <select
                        id="address-select"
                        className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        value={selectedAddress?._id || ""}
                        onChange={(e) => handleAddressChange(e.target.value)}
                      >
                        {addresses.map((address) => (
                          <option key={address._id} value={address._id}>
                            {address.street}, {address.city}, {address.state}{" "}
                            {address.postalCode}
                          </option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <ChevronDown className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                )}
                <button
                  type="button"
                  className="text-indigo-600 hover:text-indigo-500 font-medium"
                  onClick={() => setShowAddressForm(!showAddressForm)}
                >
                  {showAddressForm ? "Use Existing Address" : "Add New Address"}
                </button>
                {showAddressForm && (
                  <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {[
                      "name",
                      "phone",
                      "street",
                      "city",
                      "state",
                      "postalCode",
                      "country",
                    ].map((field) => (
                      <div
                        key={field}
                        className={field === "street" ? "sm:col-span-2" : ""}
                      >
                        <label
                          htmlFor={field}
                          className="block text-sm font-medium text-gray-700"
                        >
                          {field.charAt(0).toUpperCase() + field.slice(1)}
                        </label>
                        <input
                          type="text"
                          id={field}
                          name={field}
                          value={newAddress[field]}
                          onChange={handleFormChange}
                          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        />
                      </div>
                    ))}
                    <div className="sm:col-span-2">
                      <button
                        type="button"
                        onClick={handleAddAddress}
                        className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                      >
                        Add Address
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h2 className="text-lg font-medium text-gray-900 mb-4">
                  Order Summary
                </h2>
                <div className="flex justify-between text-base font-medium text-gray-900">
                  <p>Subtotal</p>
                  <p>$130.00</p>
                </div>
                <div className="flex justify-between text-base font-medium text-gray-900 mt-2">
                  <p>Shipping</p>
                  <p>$10.00</p>
                </div>
                <div className="flex justify-between text-base font-medium text-gray-900 mt-4">
                  <p>Total</p>
                  <p>$140.00</p>
                </div>
              </div>
              <div className="mt-6">
                <Link
                  href="/cart/order/payment"
                  className="flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Proceed to Payment
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
