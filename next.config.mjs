/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const repo = "dsp-lab"; // change if repo name differs

const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: isProd ? `/${repo}` : undefined,
  assetPrefix: isProd ? `/${repo}/` : undefined,
};

export default nextConfig;
