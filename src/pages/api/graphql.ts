import { ApolloServer } from 'apollo-server-micro';
import Cors from 'micro-cors';
import { resolversObj } from '@/api/resolvers';
import { join } from 'path';
import { loadSchemaSync } from '@graphql-tools/load';
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';
import { addResolversToSchema } from '@graphql-tools/schema';
import dataSources from '@/api/dataSources/';

const schema = loadSchemaSync(
  join(process.cwd(), '/src/api/schema/*.graphql'),
  { loaders: [new GraphQLFileLoader()] }
);

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
  schema: addResolversToSchema(schema, resolversObj),

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
