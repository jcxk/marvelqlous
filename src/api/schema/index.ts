import { makeExecutableSchema } from '@graphql-tools/schema';
import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge';
//import { loadFile } from 'graphql-import-files';

// @ts-ignore
import generated from './generated.graphql';
// @ts-ignore
import custom from './marvel.graphql';
import { customResolvers, generatedResolvers } from '../resolvers';

const typeDefs = mergeTypeDefs([generated, custom]);
const resolvers = mergeResolvers([customResolvers, generatedResolvers]);

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});
