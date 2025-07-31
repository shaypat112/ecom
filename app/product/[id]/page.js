export default function ProductPage({ params }) {
  const { id } = params;

  // Temporary fake product list (same as homepage)
  const products = [
    {
      id: 1,
      name: "Cool Sneakers",
      price: 79.99,
      description: "Comfortable sneakers for everyday wear.",
      image: "https://via.placeholder.com/300",
    },
    {
      id: 2,
      name: "Stylish Hat",
      price: 24.99,
      description: "Look great while keeping the sun out of your eyes.",
      image: "https://via.placeholder.com/300",
    },
    {
      id: 3,
      name: "Nice Hoodie",
      price: 49.99,
      description: "Warm and cozy hoodie for cool days.",
      image: "https://via.placeholder.com/300",
    },
  ];

  // Find the product that matches the ID
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <p className="p-6 text-red-500">Product not found</p>;
  }

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <img src={product.image} alt={product.name} className="mb-4" />
      <p className="text-xl text-gray-700 mb-2">${product.price.toFixed(2)}</p>
      <p className="text-gray-600">{product.description}</p>
    </main>
  );
}
