import _ from 'lodash';

const entityNames = ['characters', 'comics', 'creators', 'events'];
const resolvers = {};
_.map(entityNames, (entityName) => {
  resolvers[entityName] = async (parent, args, { dataSources }, info) => {
    const client = await dataSources.marvelApi.getClient();
    const response = await client.apis.default[entityName](args);
    return response.obj;
  };
});

export default {
  Query: resolvers,
};
