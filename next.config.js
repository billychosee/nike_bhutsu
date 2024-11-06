/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = nextConfig;

module.exports = {
  webpack: (config) => {
    config.resolve.fallback = {
      "mongodb-client-encryption": false,
      aws4: false,
      snappy: false,
      "@aws-sdk/credential-providers": false,
      "@mongodb-js/zstd": false,
      kerberos: false,
      "gcp-metadata": false,
      "supports-color": false,
    };

    return config;
  },
};
