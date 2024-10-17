/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // This should be 'images', not 'imgaes'
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cloud.appwrite.io",
        pathname: "/v1/storage/buckets/**", // Added more specific pathname
      },
    ],
  },
};

export default nextConfig;
