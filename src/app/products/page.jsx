import products from "../data/products.json";
import Link from "next/link";

export default function ProductsPage() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Products List</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="p-4 border rounded-lg shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            <p className="mb-2">{product.description}</p>
            <p className="mb-4 font-bold">Price: ${product.price}</p>
            <Link
              href={`/products/${product.id}`}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
