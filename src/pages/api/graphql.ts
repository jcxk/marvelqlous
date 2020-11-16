import { ApolloServer } from 'apollo-server-micro';
import Cors from 'micro-cors';
import { resolversObj } from '@/api/resolvers';
import { join } from 'path';
import { loadSchemaSync } from '@graphql-tools/load';
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';
import { addResolversToSchema } from '@graphql-tools/schema';
import dataSources from '@/api/dataSources/';

import getConfig from 'next/config';
const { serverRuntimeConfig } = getConfig();

const SCHEMAS_PATH = '/src/api/schema/*.graphql';
const root = serverRuntimeConfig.PROJECT_ROOT;
const schemaAbsPath = join(root + SCHEMAS_PATH);
console.log(process.cwd(), __dirname, root);

//const { RedisCache } = require('apollo-server-cache-redis');

const cors = Cors({
  allowMethods: ['POST', 'OPTIONS'],
});

export const config = {
  api: {
    bodyParser: false,
  },
};

import fs from 'fs';

fs.readdir(schemaAbsPath, function (err, files) {
  //handling error
  if (err) {
    return console.log('Unable to scan directory: ' + err);
  }
  //listing all files using forEach
  files.forEach(function (file) {
    // Do whatever you want to do with the file
    console.log(file);
  });
});

const typeDefs = `
  type Query {
    hello: String
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => `Hello world!`,
  },
};
try {
  const loadedSchema = loadSchemaSync(schemaAbsPath, {
    loaders: [new GraphQLFileLoader()],
  });
  const schema = addResolversToSchema(loadedSchema, resolversObj);
} catch (e) {
  console.log(e);
}

const conf = {
  dataSources,
  introspection: true,
  playground: true,
  context(ctx) {
    return ctx;
  },
  typeDefs,
  resolvers,
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
