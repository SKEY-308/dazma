/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    mapboxAccessToken: 'pk.eyJ1Ijoic2tleTMwOCIsImEiOiJjbDhyZ3k2MmoxbTkwM3VvNTliczdmZjAzIn0.glBxcCKuzLJLMKYRIp3YSw'
  }
}

module.exports = nextConfig
