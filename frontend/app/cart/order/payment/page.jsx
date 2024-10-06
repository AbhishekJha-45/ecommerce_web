'use client'

import { useState } from 'react'
import Link from 'next/link'
import { CreditCard, DollarSign, Truck, Smartphone, Building, ChevronLeft } from 'lucide-react'

export default function Payment() {
  const [paymentMethod, setPaymentMethod] = useState('')

  const paymentMethods = [
    { id: 'credit_card', name: 'Credit Card', icon: CreditCard },
    { id: 'paypal', name: 'PayPal', icon: DollarSign },
    { id: 'bank_transfer', name: 'Bank Transfer', icon: Building },
    { id: 'cash_on_delivery', name: 'Cash on Delivery', icon: Truck },
    { id: 'upi', name: 'UPI', icon: Smartphone },
  ]

  const renderPaymentForm = () => {
    switch (paymentMethod) {
      case 'credit_card':
        return (
          <div className="space-y-4">
            <div>
              <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">
                Card Number
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <CreditCard className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  placeholder="1234 5678 9012 3456"
                  className="pl-10 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="expirationDate" className="block text-sm font-medium text-gray-700">
                  Expiration Date
                </label>
                <input
                  type="text"
                  id="expirationDate"
                  name="expirationDate"
                  placeholder="MM/YY"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"
                />
              </div>
              <div>
                <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">
                  CVV
                </label>
                <input
                  type="text"
                  id="cvv"
                  name="cvv"
                  placeholder="123"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"
                />
              </div>
            </div>
            <div>
              <label htmlFor="nameOnCard" className="block text-sm font-medium text-gray-700">
                Name on Card
              </label>
              <input
                type="text"
                id="nameOnCard"
                name="nameOnCard"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"
              />
            </div>
          </div>
        )
      case 'paypal':
        return (
          <div className="space-y-4">
            <p className="text-sm text-gray-600">
              You will be redirected to PayPal to complete your payment.
            </p>
          </div>
        )
      case 'bank_transfer':
        return (
          <div className="space-y-4">
            <div>
              <label htmlFor="accountName" className="block text-sm font-medium text-gray-700">
                Account Name
              </label>
              <input
                type="text"
                id="accountName"
                name="accountName"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"
              />
            </div>
            <div>
              <label htmlFor="accountNumber" className="block text-sm font-medium text-gray-700">
                Account Number
              </label>
              <input
                type="text"
                id="accountNumber"
                name="accountNumber"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"
              />
            </div>
            <div>
              <label htmlFor="bankName" className="block text-sm font-medium text-gray-700">
                Bank Name
              </label>
              <input
                type="text"
                id="bankName"
                name="bankName"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"
              />
            </div>
          </div>
        )
      case 'cash_on_delivery':
        return (
          <div className="space-y-4">
            <p className="text-sm text-gray-600">
              You will pay in cash when your order is delivered. Please ensure you have the exact amount ready.
            </p>
            <div>
              <label htmlFor="deliveryInstructions" className="block text-sm font-medium text-gray-700">
                Delivery Instructions (Optional)
              </label>
              <textarea
                id="deliveryInstructions"
                name="deliveryInstructions"
                rows="3"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"
                placeholder="Any special instructions for delivery?"
              ></textarea>
            </div>
          </div>
        )
      case 'upi':
        return (
          <div className="space-y-4">
            <div>
              <label htmlFor="upiId" className="block text-sm font-medium text-gray-700">
                UPI ID
              </label>
              <input
                type="text"
                id="upiId"
                name="upiId"
                placeholder="yourname@upi"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"
              />
            </div>
            <p className="text-sm text-gray-600">
              You will receive a payment request on your UPI app. Please complete the payment there.
            </p>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
          <div className="p-6 sm:p-10">
            <div className="flex items-center mb-8">
              <Link href="/cart/order/checkout" className="text-indigo-600 hover:text-indigo-700 transition-colors duration-200">
                <ChevronLeft className="h-6 w-6" />
              </Link>
              <h1 className="text-3xl font-bold text-gray-900 ml-4">Payment</h1>
            </div>
            <form>
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Choose Payment Method</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {paymentMethods.map((method) => (
                    <button
                      key={method.id}
                      type="button"
                      onClick={() => setPaymentMethod(method.id)}
                      className={`p-4 border rounded-xl flex flex-col items-center justify-center transition-all duration-200 ${
                        paymentMethod === method.id
                          ? 'border-indigo-500 bg-indigo-50 shadow-md'
                          : 'border-gray-200 hover:border-indigo-300 hover:bg-indigo-50'
                      }`}
                    >
                      <method.icon className={`h-8 w-8 mb-2 ${paymentMethod === method.id ? 'text-indigo-600' : 'text-gray-400'}`} />
                      <span className={`text-sm font-medium ${paymentMethod === method.id ? 'text-indigo-600' : 'text-gray-500'}`}>{method.name}</span>
                    </button>
                  ))}
                </div>
              </div>
              {paymentMethod && (
                <div className="mb-8 animate-fadeIn">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Payment Details</h2>
                  {renderPaymentForm()}
                </div>
              )}
              <div className="border-t border-gray-200 pt-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Order Summary</h2>
                <div className="flex justify-between text-lg font-medium text-gray-900">
                  <p>Total</p>
                  <p>$140.00</p>
                </div>
              </div>
              <div className="mt-8">
                <button
                  type="submit"
                  className="w-full flex justify-center items-center px-6 py-3 border border-transparent rounded-xl shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                  disabled={!paymentMethod}
                >
                  {paymentMethod === 'cash_on_delivery' ? 'Place Order' : 'Pay Now'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}