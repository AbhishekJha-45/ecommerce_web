'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ShoppingCart, Trash2, Plus, Minus } from 'lucide-react'

export default function Cart() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Product 1', price: 50, quantity: 2 },
    { id: 2, name: 'Product 2', price: 30, quantity: 1 },
  ])

  const updateQuantity = (id, change) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity: Math.max(0, item.quantity + change) } : item
      )
    )
  }

  const removeItem = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Your Cart</h1>
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="p-6">
            <div className="flow-root">
              <ul role="list" className="-my-6 divide-y divide-gray-200">
                {cartItems.map((product) => (
                  <li key={product.id} className="py-6 flex">
                    <div className="flex-shrink-0 w-24 h-24 bg-gray-200 rounded-md overflow-hidden">
                      <div className="h-full w-full flex items-center justify-center text-gray-400">
                        <ShoppingCart size={32} />
                      </div>
                    </div>
                    <div className="ml-4 flex-1 flex flex-col">
                      <div>
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <h3>{product.name}</h3>
                          <p className="ml-4">${(product.price * product.quantity).toFixed(2)}</p>
                        </div>
                      </div>
                      <div className="flex-1 flex items-end justify-between text-sm">
                        <div className="flex items-center">
                          <button
                            onClick={() => updateQuantity(product.id, -1)}
                            className="text-gray-500 hover:text-gray-700"
                          >
                            <Minus size={18} />
                          </button>
                          <p className="text-gray-500 mx-2">Qty {product.quantity}</p>
                          <button
                            onClick={() => updateQuantity(product.id, 1)}
                            className="text-gray-500 hover:text-gray-700"
                          >
                            <Plus size={18} />
                          </button>
                        </div>
                        <div className="flex">
                          <button
                            onClick={() => removeItem(product.id)}
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
            <div className="flex justify-between text-base font-medium text-gray-900">
              <p>Subtotal</p>
              <p>${subtotal.toFixed(2)}</p>
            </div>
            <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
            <div className="mt-6">
              <Link
                href="/checkout"
                className="flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Checkout
              </Link>
            </div>
            <div className="mt-6 flex justify-center text-sm text-center text-gray-500">
              <p>
                or{' '}
                <Link href="/" className="text-indigo-600 font-medium hover:text-indigo-500">
                  Continue Shopping<span aria-hidden="true"> &rarr;</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}