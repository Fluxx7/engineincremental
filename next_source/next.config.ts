import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // basePath: "/{github pages base path}}",
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
};

export default nextConfig;
