import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    minimumCacheTTL: 31536000,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.dotyourspot.com",
        port: "",
        pathname: "/images/revelin-bistro/**",
      },
    ],
  },
};

export default withNextIntl(nextConfig);
