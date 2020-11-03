import _ from 'lodash';

const resolvers: any = {
  list: async (parent, args, { dataSources }, info) => {
    //const response = await dataSources.marvelApi.getEntityByArgs(args);
    const client = await dataSources.marvelApi.getClient();
    const response = await client.apis.default[args.marvelEntity + 's'](
      args.filters
    );
    return {
      results: _.get(response, 'obj.data.results', []),
      pagination: {
        ..._.pick(_.get(response, 'obj.data', {}), [
          'count',
          'limit',
          'offset',
          'total',
        ]),
      },
    };
  },

  debug: async (parent, args, { dataSources }, info) => {
    return {
      parent,
      args,
      dataSources: _.keys(dataSources),
      info,
    };
  },
  single_character_by_id: async (parent, args, { dataSources }, info) => {
    return dataSources.marvelApi.getCharacterById(args.characterId);
  },
};

const entityNames = ['characters', 'comics', 'creators', 'events'];

_.map(entityNames, (entityName) => {
  resolvers[entityName] = async (parent, args, { dataSources }, info) => {
    return dataSources.marvelApi.getEntity(entityName, args);
  };
});

export default resolvers;
