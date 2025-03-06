/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    basePath: '',
    images: {
        unoptimized: false,
    },
    trailingSlash: false,
};

export default nextConfig;
