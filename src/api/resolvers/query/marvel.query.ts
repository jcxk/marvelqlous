import _ from 'lodash';

import { getSdk } from '@/generated/sdk';
import { findAndParseConfig } from '@graphql-mesh/config';
import { getMesh } from '@graphql-mesh/runtime';

const resolvers: any = {
  list: async (parent, args, {}, info) => {
    const meshConfig = await findAndParseConfig();
    const { sdkRequester } = await getMesh(meshConfig);
    console.log(args);
    const sdk = getSdk(sdkRequester);
    const response = await sdk.charactersQuery({ options: '' });
    console.log(response, 'sdfasdf');
    return {
      results: _.get(response, 'characters.data.results', []),
      pagination: {
        ..._.pick(_.get(response, 'characters.data', {}), [
          'count',
          'limit',
          'offset',
          'total',
        ]),
      },
    };
  },
  /*
  list: async (parent, args, { dataSources }, info) => {
    const response = await dataSources.marvelApi.getEntityByArgs(args);

    return {
      results: _.get(response, 'data.results', []),
      pagination: {
        ..._.pick(_.get(response, 'data', {}), [
          'count',
          'limit',
          'offset',
          'total',
        ]),
      },
    };
  },
*/
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
