import { ApolloServer } from 'apollo-server-micro';
import Cors from 'micro-cors';
import { resolversObj } from '@/api/resolvers';
import { join } from 'path';
import { loadSchemaSync } from '@graphql-tools/load';
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';
import { addResolversToSchema } from '@graphql-tools/schema';
import dataSources from '@/api/dataSources/';

const SCHEMAS_PATH = '/src/api/schema/*.graphql';
const schemaAbsPath = join(process.cwd() + SCHEMAS_PATH);
console.log(process.cwd());

let schema: any;
try {
  schema = loadSchemaSync(schemaAbsPath, {
    loaders: [new GraphQLFileLoader()],
  });
} catch (e) {
  console.log(process.cwd(), schemaAbsPath);
  console.log(e);
}

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
