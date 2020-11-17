import GraphQLJSON, { GraphQLJSONObject } from 'graphql-type-json';
import { GraphQLDate, GraphQLDateTime } from 'graphql-iso-date';
import generatedResolversQuery from './query/generated.query';
import customQuery from './query/marvel.query';
//import { Mutation } from './mutation/index';
import _ from 'lodash';
import Entities from './entity';
export const generatedResolvers = generatedResolversQuery;

export const customResolvers = {
  JSON: GraphQLJSON,
  JSONObject: GraphQLJSONObject,
  Date: GraphQLDate,
  DateTime: GraphQLDateTime,
  ...Entities,
  Query: customQuery,
};
