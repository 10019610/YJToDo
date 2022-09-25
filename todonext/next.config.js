/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
// }

// module.exports = nextConfig
const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "a10019610",
        mongodb_password: "did8847",
        mongodb_clustername: "cluster0",
        mongodb_database: "test",
      },
    };
  }

  return {
    env: {
      mongodb_username: "a10019610",
      mongodb_password: "did8847",
      mongodb_clustername: "cluster0",
      mongodb_database: "test",
    },
  };
};
