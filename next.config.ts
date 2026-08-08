import type { NextConfig } from "next";
import Image from 'next/image';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/portfolio',
  assetPrefix: '/portfolio/',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;