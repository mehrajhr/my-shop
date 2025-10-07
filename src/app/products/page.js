// app/products/page.jsx
import Image from "next/image";
import Link from "next/link";
import products from "../../../public/products.json"; // import JSON directly

const ProductsPage = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-2xl shadow-md p-4">
            <div className="relative w-full h-64">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover rounded-xl"
              />
            </div>
            <h2 className="mt-4 font-bold text-lg">{product.name}</h2>
            <p className="text-gray-600">{product.category}</p>
            <p className="mt-2 font-bold">${product.price}</p>
            <Link
              href={`/products/${product.id}`}
              className="mt-3 inline-block text-blue-600 hover:underline"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductsPage;
