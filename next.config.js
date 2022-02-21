/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')
const runtimeCaching = require("next-pwa/cache");
module.exports = withPWA({
  experimental: {
    runtime: 'nodejs',
    serverComponents: true,
  },
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
    runtimeCaching,
    buildExcludes: [/middleware-manifest.json$/],
    disable: process.env.NODE_ENV === 'development',
  },
})
