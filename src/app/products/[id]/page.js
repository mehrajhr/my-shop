import Image from "next/image";
import Link from "next/link";
import products from "../../../../public/products.json"; // adjust relative path

const page = ({ params }) => {
  const { id } = params;
  const product = products.find((p) => p.id.toString() === id);

  if (!product) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h2 className="text-2xl font-bold">Product not found</h2>
      </div>
    );
  }

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 md:flex md:gap-10">
        {/* Product Image */}
        <div className="relative w-full md:w-1/2 h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-md">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Product Info */}
        <div className="mt-6 md:mt-0 md:w-1/2">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-gray-600 mt-2">{product.category}</p>
          <p className="mt-4 text-xl font-semibold text-gray-800">
            ${product.price}
          </p>
          <p className="mt-4 text-gray-700">
            Brand: <span className="font-medium">{product.brand}</span>
          </p>
          <p className="mt-2 text-gray-700">
            Available Sizes:{" "}
            {product.size.map((s) => (
              <span key={s} className="mr-2 px-2 py-1 border rounded-md">
                {s}
              </span>
            ))}
          </p>
          <p className="mt-2 text-gray-700">
            Colors:{" "}
            {product.color.map((c) => (
              <span key={c} className="mr-2 px-2 py-1 border rounded-md">
                {c}
              </span>
            ))}
          </p>
          <p
            className={`mt-2 font-semibold ${
              product.inStock ? "text-green-600" : "text-red-600"
            }`}
          >
            {product.inStock ? "In Stock" : "Out of Stock"}
          </p>

          <button
            className={`mt-6 px-6 py-3 rounded-lg text-white font-semibold ${
              product.inStock
                ? "bg-blue-600 hover:bg-blue-700"
                : "bg-gray-400 cursor-not-allowed"
            } transition-colors duration-300`}
            disabled={!product.inStock}
          >
            Add to Cart
          </button>

          <div className="mt-6">
            <Link href="/" className="text-blue-600 hover:underline">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
