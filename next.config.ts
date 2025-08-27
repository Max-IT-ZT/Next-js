module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org",
        pathname: "/t/p/**",
      },
      {
        protocol: "https",
        hostname: "www.freetogame.com",
        pathname: "/g/**",
      },
      {
        protocol: "https",
        hostname: "anothercdn.com",
        pathname: "/**",
      },
    ],
  },
};
