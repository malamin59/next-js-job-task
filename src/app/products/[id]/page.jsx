import products from '../../data/products.json'
import Image from "next/image";
import Link from "next/link";

export default function ProductDetailsPage({ params }) {
  const { id } = params;
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="p-10 text-center">
        <h1 className="text-3xl font-bold">Product Not Found</h1>
        <Link href="/products" className="text-blue-500 mt-4 inline-block">
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-10">
      <Link href="/products" className="text-blue-500 mb-6 inline-block">
        &larr; Back to Products
      </Link>

      <div className="flex flex-col md:flex-row gap-10 items-center">
        {/* Product Image */}
        <div className="flex-shrink-0 w-full md:w-1/2">
          {product.image && (
            <Image
              src={product.image}
              alt={product.name}
              width={500}
              height={500}
              className="rounded-lg shadow-lg"
            />
          )}
        </div>

        {/* Product Info */}
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-700 mb-2">{product.description}</p>
          <p className="text-lg font-semibold mb-2">Category: {product.category}</p>
          <p className="text-2xl font-bold text-green-600 mb-4">Price: ${product.price}</p>

          <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
