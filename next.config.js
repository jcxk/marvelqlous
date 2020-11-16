module.exports = {
  serverRuntimeConfig: {
    PROJECT_ROOT: __dirname,
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/list/comics',
        permanent: true,
      },
    ];
  },
};
