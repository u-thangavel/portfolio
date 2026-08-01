import type { NextConfig } from "next";
import Image from 'next/image';

const nextConfig: NextConfig = {
  output: 'export',
  //basePath: '/thangavel.github.io',
  //assetPrefix: '/thangavel.github.io/',
  images: {
    unoptimized: true,
  },
};



export default nextConfig;