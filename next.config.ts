import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "file",
        pathname: "D:/0_Smartdrill/CASE/**",
      },
      {
        protocol: "file",
        pathname: "D:/smartdrill-website/docs/ppt/**",
      },
    ],
  },
};

export default nextConfig;
