import Link from "next/link";
import { Orbitron } from "next/font/google";
import './globals.css';
import { CartProvider } from "../context/CartContext";  // adjust path if needed

// Load Orbitron font
const orbitron = Orbitron({ subsets: ["latin"], weight: ["400", "700"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={orbitron.className}>
      <body className="bg-starry text-futuristic-white font-futuristic min-h-screen relative">
        <CartProvider>
          <nav className="bg-futuristic-black border-b border-futuristic-gray p-4 text-futuristic-white flex gap-6 shadow-md shadow-cyan-700">
            <Link href="/" className="hover:underline hover:text-futuristic-accent transition">
              Home
            </Link>
            <Link href="/admin" className="hover:underline hover:text-futuristic-accent transition">
              Admin Dashboard
            </Link>
            <Link href="/cart" className="hover:underline hover:text-futuristic-accent transition">
              Cart
            </Link>
          </nav>

          <main className="p-6">
            {children}
          </main>
        </CartProvider>
      </body>
    </html>
  );
}
