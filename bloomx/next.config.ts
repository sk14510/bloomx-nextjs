import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname:
          "reports.astroroshita.com",
        port: "",
        pathname: "/wp-content/uploads/2025/11/Roshita-ji.webp",
        search: "",
      },
    ],
  },
};

export default nextConfig;
