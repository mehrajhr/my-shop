import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="hero min-h-[90vh] bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse gap-10">
        <div className="w-full max-w-md mx-auto">
          <Image
            src="https://i.ibb.co.com/DfsPn2SG/banner1.webp"
            alt="Shopping illustration"
            width={800}
            height={800}
            className="w-full h-auto rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300 object-cover"
            priority
          />
        </div>
        <div>
          <h1 className="text-5xl font-bold leading-tight">
            Discover the <span className="text-primary">Best Deals</span>{" "}
            Online!
          </h1>
          <p className="py-6 text-lg text-gray-600">
            Shop the latest trends, exclusive offers, and quality products — all
            in one place. Experience a smarter way to shop with <b>My-Shop</b>.
          </p>
          <div className="flex gap-4">
            <button className="btn btn-primary">Shop Now</button>
            <button className="btn btn-outline">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
}
