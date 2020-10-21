import marvelAPI from './marvel';
const dataSources = (): any => {
  return {
    marvelApi: new marvelAPI(),
  };
};

export default dataSources;
