"use client";

import { useState } from "react";
import Image from "next/image";

export default function AdminPage() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Cool Sneakers",
      price: 79.99,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Stylish Hat",
      price: 24.99,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Nice Hoodie",
      price: 49.99,
      image: "https://via.placeholder.com/150",
    },
  ]);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const [editingId, setEditingId] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();

    if (!name.trim() || !price.trim() || !image.trim()) {
      alert("Please enter name, price, and image URL");
      return;
    }

    const parsedPrice = parseFloat(price);
    if (isNaN(parsedPrice) || parsedPrice < 0) {
      alert("Please enter a valid positive price");
      return;
    }

    if (editingId !== null) {
      setProducts((prev) =>
        prev.map((p) =>
          p.id === editingId ? { ...p, name, price: parsedPrice, image } : p
        )
      );
      setEditingId(null);
    } else {
      const newId = products.length ? products[products.length - 1].id + 1 : 1;
      const newProduct = { id: newId, name, price: parsedPrice, image };
      setProducts([...products, newProduct]);
    }

    setName("");
    setPrice("");
    setImage("");
  }

  function startEdit(product) {
    setEditingId(product.id);
    setName(product.name);
    setPrice(product.price.toString());
    setImage(product.image);
  }

  function cancelEdit() {
    setEditingId(null);
    setName("");
    setPrice("");
    setImage("");
  }

  function deleteProduct(id) {
    if (editingId === id) cancelEdit();
    setProducts(products.filter((p) => p.id !== id));
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      <form onSubmit={handleSubmit} className="mb-8 space-y-5 max-w-md">
        <div>
          <label htmlFor="name" className="block mb-1 font-medium">
            Product Name
          </label>
          <input
            id="name"
            type="text"
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-cyan-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Product name"
            required
          />
        </div>

        <div>
          <label htmlFor="price" className="block mb-1 font-medium">
            Price ($)
          </label>
          <input
            id="price"
            type="number"
            step="0.01"
            min="0"
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-cyan-500"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Price"
            required
          />
        </div>

        <div>
          <label htmlFor="image" className="block mb-1 font-medium">
            Image URL
          </label>
          <input
            id="image"
            type="url"
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-cyan-500"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            placeholder="https://example.com/image.jpg"
            required
          />
        </div>

        <div className="flex gap-4">
          <button
            type="submit"
            className="bg-cyan-600 text-white px-5 py-2 rounded hover:bg-cyan-700 transition"
          >
            {editingId !== null ? "Update Product" : "Add Product"}
          </button>

          {editingId !== null && (
            <button
              type="button"
              onClick={cancelEdit}
              className="bg-gray-500 text-white px-5 py-2 rounded hover:bg-gray-600 transition"
            >
              Cancel
            </button>
          )}
        </div>
      </form>

      <h2 className="text-2xl font-semibold mb-4">Current Products</h2>
      <ul className="space-y-4 max-w-md">
        {products.map((product) => (
          <li
            key={product.id}
            className="flex justify-between items-center border border-gray-300 p-4 rounded-lg shadow-sm hover:shadow-md transition"
          >
            <div className="flex items-center gap-4">
              <Image
                src={product.image}
                alt={product.name}
                width={64}
                height={64}
                className="rounded-md object-cover"
                unoptimized={true} // optionally bypass optimization for placeholders
              />
              <div className="text-lg font-medium">
                {product.name} - ${product.price.toFixed(2)}
              </div>
            </div>
            <div className="flex gap-4">
              <button
                className="text-cyan-600 hover:underline"
                onClick={() => startEdit(product)}
                aria-label={`Edit ${product.name}`}
              >
                Edit
              </button>
              <button
                className="text-red-600 hover:underline"
                onClick={() => deleteProduct(product.id)}
                aria-label={`Delete ${product.name}`}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
