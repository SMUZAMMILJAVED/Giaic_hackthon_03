// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
    minimumCacheTTL: 60, // Cache images for performance
    dangerouslyAllowSVG: true, // If you're using SVGs
    contentSecurityPolicy: "default-src 'self'; img-src * data: blob:;",
  },
};

export default nextConfig;
