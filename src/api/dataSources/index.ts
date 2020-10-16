const marvelAPI = require('./marvel');

module.exports = {
  dataSources: () => ({
    marvelApi: new marvelAPI()
  })
};
