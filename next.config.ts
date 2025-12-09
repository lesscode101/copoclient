import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        // 1. **الحل السريع:** تعطيل التحسينات
        unoptimized: true,

        // 2. أو، استخدام remotePatterns (يجب أن يعمل هذا الآن):
        remotePatterns: [
            {
                protocol: 'https', // يجب أن تكون مطابقة لبروتوكول الرابط (https)
                hostname: '192.168.1.100', // عنوان IP
                port: '5000', // المنفذ
                pathname: '/images/products/**',
            },
        ],
    },

    reactStrictMode: true,
};

export default nextConfig;
