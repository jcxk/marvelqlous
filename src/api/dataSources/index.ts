//import marvelAPI from './marvel';
import marvelSwaggerAPI from './marvelSwagger';
const dataSources = (): any => {
  return {
    marvelApi: new marvelSwaggerAPI(),
  };
};

export default dataSources;
