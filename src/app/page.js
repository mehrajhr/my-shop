"use client";
import Link from "next/link";
import HeroSection from "./components/HeroSection";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from public folder
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data.slice(0, 3))) // show only 3 products
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className="p-8">
      <HeroSection></HeroSection>
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Featured Products
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative w-full h-64 md:h-80 lg:h-96">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={400}
                    height={400}
                    className="object-cover rounded-2xl"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p className="text-gray-600 mt-1">{product.category}</p>
                  <p className="mt-2 font-bold text-gray-800">
                    ${product.price}
                  </p>
                  <Link
                    href={`/products/${product.id}`}
                    className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
