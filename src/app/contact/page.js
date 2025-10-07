import React from "react";

const page = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-8">
          Contact Us
        </h1>
        <p className="text-center text-gray-700 mb-12">
          Have questions or need help? Fill out the form below and we’ll get
          back to you as soon as possible.
        </p>

        <form className="bg-white shadow-lg rounded-2xl p-8 space-y-6">
          <div>
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div>
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div>
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              placeholder="Write your message..."
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold rounded-lg px-6 py-3 hover:bg-blue-700 transition-colors duration-300"
          >
            Send Message
          </button>
        </form>

        <div className="mt-12 text-center text-gray-700 space-y-2">
          <p>Email: support@myshop.com</p>
          <p>Phone: +1 (555) 123-4567</p>
          <p>Address: 123 Fashion Street, Your City, Country</p>
        </div>
      </div>
    </section>
  );
};

export default page;
