import _ from 'lodash';

const resolvers: any = {
  async list(_parent: any, args: any, { dataSources }, _info: any) {
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
};
export default resolvers;
