/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",   // static export
  images: {
    unoptimized: true, // disable server optimization so static export works
  },
};

export default nextConfig;
