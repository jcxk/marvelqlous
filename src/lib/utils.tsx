import React, { Fragment, useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import _ from 'lodash';
//import {withApollo} from '@/lib/apollo';
//import {QueryCharactersArgs, CharacterDataWrapper   }from "@/generated/types.d";

const fields = {
  characters: `
        fragment charactersFields on Character {
            id
            name
        }
        `,

  comics: `
        fragment comicsFields on Comic {
            id
            name: title 
        }
        `,
  events: `
        fragment eventsFields on Event {
            id
            name: title 
        }
        `,
};

export const GET_LIST = (entityName) => gql`


    query get${_.startCase(entityName)}($offset: Int, $limit: Int) {
        ${entityName}(offset: $offset, limit: $limit) {
        data {
            count
            limit
            offset
            total
            results {
                ${'...' + entityName + 'Fields'}
            }
        }
    }
    }
    ${fields[entityName]}

`;

export const FetchList = (entityName: string) => {
  const { data, loading, fetchMore, error } = useQuery(GET_LIST(entityName), {
    variables: {
      offset: 10,
      limit: 20,
    },
    fetchPolicy: 'cache-and-network',
  });
  const loadMore = (offset: number, limit: number): Promise<any> => {
    return fetchMore({
      variables: {
        limit: limit,
        offset: offset + limit,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev;
        return fetchMoreResult;
      },
    });
  };
  return {
    data: _.get(data, entityName + '.data', []),
    loading,
    loadMore,
    error,
  };
};
