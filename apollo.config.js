module.exports = {
  client: {
    name: 'frontend',
    excludes: ['node_modules/**'],
    includes: ['./src/**/*.tsx'],
    service: {
      name: 'backend',
      url: "http://localhost:3000/api/graphql"
    },
  }
};
