import gql from 'graphql-tag';
import { NextPage } from 'next';
import { NextRouter, useRouter } from 'next/router';
import { NormalizedCacheObject } from '@apollo/client';
import { QueryHookOptions, useQuery } from '@apollo/client';
import * as Apollo from '@apollo/client';
import React from 'react';
export const GetCharactersDocument = gql`
  query getCharacters($name: String) {
    characters(name: $name) {
      data {
        ...characterFields
      }
    }
  }
  ${CharacterFieldsFragmentDoc}
`;
export async function getServerPageGetCharacters<T extends true | false>(
  options: Omit<Apollo.QueryOptions<GetCharactersQueryVariables>, 'query'>,
  apolloClient: Apollo.ApolloClient<NormalizedCacheObject>,
  rawQueryResult?: T
): Promise<{
  props: T extends true
    ? Apollo.ApolloQueryResult<GetCharactersQuery>
    : { apolloState: NormalizedCacheObject };
}> {
  const data = await apolloClient.query<GetCharactersQuery>({
    ...options,
    query: Operations.GetCharactersDocument,
  });
  if (rawQueryResult) {
    return {
      props: data,
    } as any;
  }
  const apolloState = apolloClient.cache.extract();
  return {
    props: {
      apolloState,
    },
  } as any;
}
export const useGetCharacters = (
  optionsFunc?: (
    router: NextRouter
  ) => QueryHookOptions<GetCharactersQuery, GetCharactersQueryVariables>
) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.GetCharactersDocument, options);
};
export type PageGetCharactersComp = React.FC<{
  data?: GetCharactersQuery;
  error?: Apollo.ApolloError;
}>;
export const withPageGetCharacters = (
  optionsFunc?: (
    router: NextRouter
  ) => QueryHookOptions<GetCharactersQuery, GetCharactersQueryVariables>
) => (WrappedComponent: PageGetCharactersComp): NextPage => (props) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  const { data, error } = useQuery(Operations.GetCharactersDocument, options);
  return <WrappedComponent {...props} data={data} error={error} />;
};
export const ssrGetCharacters = {
  getServerPage: getServerPageGetCharacters,
  withPage: withPageGetCharacters,
  usePage: useGetCharacters,
};
export const GetComicsDocument = gql`
  query getComics($name: String) {
    comics(title: $name) {
      data {
        ...comicsFields
      }
    }
  }
  ${ComicsFieldsFragmentDoc}
`;
export async function getServerPageGetComics<T extends true | false>(
  options: Omit<Apollo.QueryOptions<GetComicsQueryVariables>, 'query'>,
  apolloClient: Apollo.ApolloClient<NormalizedCacheObject>,
  rawQueryResult?: T
): Promise<{
  props: T extends true
    ? Apollo.ApolloQueryResult<GetComicsQuery>
    : { apolloState: NormalizedCacheObject };
}> {
  const data = await apolloClient.query<GetComicsQuery>({
    ...options,
    query: Operations.GetComicsDocument,
  });
  if (rawQueryResult) {
    return {
      props: data,
    } as any;
  }
  const apolloState = apolloClient.cache.extract();
  return {
    props: {
      apolloState,
    },
  } as any;
}
export const useGetComics = (
  optionsFunc?: (
    router: NextRouter
  ) => QueryHookOptions<GetComicsQuery, GetComicsQueryVariables>
) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.GetComicsDocument, options);
};
export type PageGetComicsComp = React.FC<{
  data?: GetComicsQuery;
  error?: Apollo.ApolloError;
}>;
export const withPageGetComics = (
  optionsFunc?: (
    router: NextRouter
  ) => QueryHookOptions<GetComicsQuery, GetComicsQueryVariables>
) => (WrappedComponent: PageGetComicsComp): NextPage => (props) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  const { data, error } = useQuery(Operations.GetComicsDocument, options);
  return <WrappedComponent {...props} data={data} error={error} />;
};
export const ssrGetComics = {
  getServerPage: getServerPageGetComics,
  withPage: withPageGetComics,
  usePage: useGetComics,
};
export const ListDynamicDocument = gql`
  query listDynamic($entity: marvelEntity!, $filters: JSONObject!) {
    list(marvelEntity: $entity, filters: $filters) {
      pagination {
        ...Pagination
      }
      results {
        __typename
        ... on Comic {
          id
          title
        }
      }
    }
  }
  ${PaginationFragmentDoc}
`;
export async function getServerPageListDynamic<T extends true | false>(
  options: Omit<Apollo.QueryOptions<ListDynamicQueryVariables>, 'query'>,
  apolloClient: Apollo.ApolloClient<NormalizedCacheObject>,
  rawQueryResult?: T
): Promise<{
  props: T extends true
    ? Apollo.ApolloQueryResult<ListDynamicQuery>
    : { apolloState: NormalizedCacheObject };
}> {
  const data = await apolloClient.query<ListDynamicQuery>({
    ...options,
    query: Operations.ListDynamicDocument,
  });
  if (rawQueryResult) {
    return {
      props: data,
    } as any;
  }
  const apolloState = apolloClient.cache.extract();
  return {
    props: {
      apolloState,
    },
  } as any;
}
export const useListDynamic = (
  optionsFunc?: (
    router: NextRouter
  ) => QueryHookOptions<ListDynamicQuery, ListDynamicQueryVariables>
) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.ListDynamicDocument, options);
};
export type PageListDynamicComp = React.FC<{
  data?: ListDynamicQuery;
  error?: Apollo.ApolloError;
}>;
export const withPageListDynamic = (
  optionsFunc?: (
    router: NextRouter
  ) => QueryHookOptions<ListDynamicQuery, ListDynamicQueryVariables>
) => (WrappedComponent: PageListDynamicComp): NextPage => (props) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  const { data, error } = useQuery(Operations.ListDynamicDocument, options);
  return <WrappedComponent {...props} data={data} error={error} />;
};
export const ssrListDynamic = {
  getServerPage: getServerPageListDynamic,
  withPage: withPageListDynamic,
  usePage: useListDynamic,
};
