// /app/cart/page.js
"use client";

import { useCart } from "../../context/CartContext";
import Link from "next/link";

export default function CartPage() {
  const { cartItems, removeFromCart, clearCart, totalPrice } = useCart();

  return (
    <div className="p-6 bg-gradient-to-b from-black to-gray-900 text-white min-h-screen font-futuristic">
      <h1 className="text-4xl font-bold mb-6">🛒 Your Cart</h1>

      {cartItems.length === 0 ? (
        <div className="text-lg">Your cart is empty. <Link href="/" className="text-blue-400 hover:underline">Go shopping</Link>.</div>
      ) : (
        <div className="space-y-6">
          <div className="grid gap-6">
            {cartItems.map((item, index) => (
              <div key={index} className="flex items-center bg-gray-800 rounded-lg p-4 shadow-md hover:shadow-xl transition">
                <img src={item.image} alt={item.name} className="w-24 h-24 rounded mr-4 border border-gray-700" />
                <div className="flex-1">
                  <h2 className="text-xl font-semibold">{item.name}</h2>
                  <p className="text-gray-400">${item.price.toFixed(2)} x {item.quantity}</p>
                  <p className="text-green-400 font-bold">Total: ${(item.price * item.quantity).toFixed(2)}</p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="ml-4 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="mt-8 border-t pt-6">
            <p className="text-2xl font-bold text-yellow-300">Subtotal: ${totalPrice().toFixed(2)}</p>
            <div className="flex gap-4 mt-4">
              <button
                onClick={clearCart}
                className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-600 transition"
              >
                Clear Cart
              </button>
              <Link href="/checkout">
                <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition">
                  Proceed to Checkout
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}

      <div className="mt-12 text-sm text-gray-500 border-t border-gray-700 pt-6">
        <h3 className="text-lg font-semibold mb-2">✨ Features You'll Love:</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Live cart updates</li>
          <li>Visual product previews</li>
          <li>Subtotal calculation</li>
          <li>Clear cart instantly</li>
          <li>Proceed to secure checkout</li>
          <li>Styled with Tailwind's dark gradient</li>
          <li>Hover animations on buttons</li>
          <li>Mobile responsive layout</li>
          <li>Persistent state via context</li>
          <li>Accessible navigation</li>
          <li>Cart item quantities</li>
          <li>Modern font with Orbitron</li>
          <li>Conditional rendering on empty cart</li>
          <li>Custom accent colors</li>
          <li>Sticky navigation (coming soon)</li>
          <li>Discount promo code (coming soon)</li>
          <li>Estimated delivery preview (coming soon)</li>
          <li>Shipping cost calculator (coming soon)</li>
          <li>Product review popups (coming soon)</li>
          <li>Multi-language support (planned)</li>
        </ul>
      </div>
    </div>
  );
}
