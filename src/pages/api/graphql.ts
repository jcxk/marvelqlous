import { ApolloServer } from 'apollo-server-micro';
import Cors from 'micro-cors';
import dataSources from '@/api/dataSources/';
import { schema } from '@/api/schema';
//const { RedisCache } = require('apollo-server-cache-redis');

const cors = Cors({
  allowMethods: ['POST', 'OPTIONS'],
});

export const config = {
  api: {
    bodyParser: false,
  },
};

const conf = {
  dataSources,
  introspection: true,
  playground: true,
  context(ctx) {
    return ctx;
  },
  schema: schema,
  /*
  cache: new RedisCache({
      host: 'localhost',

  }),
   context: async ({ req }) => {
    return true;
  },
  */
};

const server = new ApolloServer(conf);
const handler = server.createHandler({ path: '/api/graphql' });
export default cors(handler);
