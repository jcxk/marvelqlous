import { ApolloClient, ApolloLink, InMemoryCache } from '@apollo/client';
import { createHttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import Head from 'next/head';
import { ApolloProvider } from '@apollo/react-hooks';

export function withApollo(
  PageComponent: any
): ({
  apolloClient,
  apolloState,
  ...pageProps
}: {
  apolloClient: any;
  apolloState: any;
  [p: string]: any;
}) => JSX.Element {
  const WithApollo = ({ apolloClient, apolloState, ...pageProps }) => {
    const client = apolloClient || initApolloClient(apolloState);

    return (
      <ApolloProvider client={client}>
        <PageComponent {...pageProps} />
      </ApolloProvider>
    );
  };

  WithApollo.getInitialProps = async (ctx: any) => {
    const { AppTree } = ctx;
    const apolloClient = (ctx.apollClient = initApolloClient());

    let pageProps = {};
    if (PageComponent.getInitialProps) {
      pageProps = await PageComponent.getInitialProps(ctx);
    }

    // If on server
    if (typeof window === 'undefined') {
      if (ctx.res && ctx.res.finished) {
        return pageProps;
      }

      try {
        const { getDataFromTree } = await import('@apollo/react-ssr');
        await getDataFromTree(
          <AppTree
            pageProps={{
              ...pageProps,
              apolloClient,
            }}
          />
        );
      } catch (e) {
        console.error(e);
      }

      Head.rewind();
    }

    const apolloState = apolloClient.cache.extract();
    return {
      ...pageProps,
      apolloState,
    };
  };

  return WithApollo;
}

const initApolloClient = (initialState = {}) => {
  const errorLink: any = onError(({ networkError }) => {
    console.log(errorLink);
  });
  const httpLink: any = createHttpLink({ uri: '/api/graphql' });
  return new ApolloClient({
    credentials: 'include',
    connectToDevTools: true,
    link: errorLink.concat(httpLink),
    cache: new InMemoryCache(),
  });
};
