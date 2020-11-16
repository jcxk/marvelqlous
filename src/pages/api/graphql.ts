import { ApolloServer, gql } from 'apollo-server-micro';
import microCors from 'micro-cors';
import { resolversObj } from '@/api/resolvers';
import { join } from 'path';
import { loadSchemaSync } from '@graphql-tools/load';
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';
import { addResolversToSchema } from '@graphql-tools/schema';
import dataSources from '@/api/dataSources/';
console.log(process.cwd(), __dirname);
const schema = loadSchemaSync(
  join(process.cwd(), '/src/api/schema/*.graphql'),
  { loaders: [new GraphQLFileLoader()] }
);
//const { RedisCache } = require('apollo-server-cache-redis');
export const config = {
  api: {
    bodyParser: false,
  },
};

const conf = {
  dataSources,
  introspection: true,
  playground: true,
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
const cors = microCors();
const apolloServer = new ApolloServer(conf);
const handler = apolloServer.createHandler({ path: '/api/graphql' });
export default cors((req, res) =>
  req.method === 'OPTIONS' ? res.end() : handler(req, res)
);
