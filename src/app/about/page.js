import Link from "next/link";
import React from "react";

const AboutPage = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          About Our Shop
        </h1>
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-4">
          Welcome to our shop! We are dedicated to providing high-quality
          clothing products that combine style, comfort, and affordability. Our
          mission is to make shopping easy and enjoyable for everyone.
        </p>
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-4">
          With a wide variety of clothing items including t-shirts, hoodies,
          jeans, jackets, and more, we strive to offer something for every style
          and preference. Our team carefully selects each product to ensure it
          meets our high standards of quality and design.
        </p>
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-8">
          Thank you for choosing us for your fashion needs. We’re committed to
          giving you the best shopping experience possible.
        </p>
        <Link
          href="/"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
};

export default AboutPage;
