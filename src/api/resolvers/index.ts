import GraphQLJSON, { GraphQLJSONObject } from 'graphql-type-json';
import { GraphQLDate, GraphQLDateTime } from 'graphql-iso-date';
import Query from './query/';
//import { Mutation } from './mutation/index';
import Entities from './entity';

export const resolversObj = {
  JSON: GraphQLJSON,
  JSONObject: GraphQLJSONObject,
  Date: GraphQLDate,
  DateTime: GraphQLDateTime,
  ...Entities,
  ...Query,
  // Mutation,
  //Subscription
};
