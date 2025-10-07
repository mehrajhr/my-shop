import products from "../../../../public/products.json";

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

import Image from "next/image";
import Link from "next/link";

const ProductPage = ({ params }) => {
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
        <div className="relative w-full md:w-1/2 h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-md">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="mt-6 md:mt-0 md:w-1/2">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-gray-600 mt-2">{product.category}</p>
          <p className="mt-4 text-xl font-semibold text-gray-800">
            ${product.price}
          </p>
          <Link
            href="/products"
            className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Back to Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
