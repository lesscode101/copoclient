import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // إعدادات الصور
  images: {
    unoptimized: true, //  سريع إذا لم تريد تحسين Next.js للصور
    remotePatterns: [
      {
        protocol: "https", // البروتوكول العام
        hostname: "copo-production.up.railway.app", // رابط المشروع العام على Railway
        pathname: "/images/products/**", // مسار الصور في مشروعك
      },
    ],
  },

  // إعادة كتابة الروابط (اختياري لتسهيل fetch من API)
async rewrites() {
  return [
    {
      source: "/api/:path*",
      destination: "https://copo-production.up.railway.app/:path*", // إزالة /api هنا
    },
  ];
}
};

export default nextConfig;
