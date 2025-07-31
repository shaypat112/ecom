import Link from "next/link";
import './globals.css';

export default function HomePage() {
  const products = [
    { id: 1, name: "Cool Sneakers", price: 79.99, image: "https://via.placeholder.com/150" },
    { id: 2, name: "Stylish Hat", price: 24.99, image: "https://via.placeholder.com/150" },
    { id: 3, name: "Nice Hoodie", price: 49.99, image: "https://via.placeholder.com/150" },
  ];

  return (
    <main className="p-6 bg-starry min-h-screen text-futuristic-white font-futuristic">
      <h1 className="text-4xl font-bold mb-8 tracking-wide">🛍️ Welcome to My Shop</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/product/${product.id}`}
            className="block border border-futuristic-gray rounded-lg p-5 shadow-lg hover:shadow-cyan-500 transition duration-300 bg-futuristic-black"
          >
            <img
              src={product.image}
              alt={product.name}
              className="mb-4 w-full rounded shadow-md shadow-cyan-600"
            />
            <h2 className="text-2xl font-semibold">{product.name}</h2>
            <p className="text-futuristic-accent text-xl">${product.price.toFixed(2)}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
