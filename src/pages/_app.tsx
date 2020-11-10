import 'antd/dist/antd.css';
import '@/styles/index.css';

// import App from "next/app";
import type { AppProps /*, AppContext */ } from 'next/app';
import AppLayout from '@/layouts/app';
import useQueryNext from '@/components/utils/useQueryNext';
import React from 'react';
import { Spin } from 'antd';

function MyApp({ Component, pageProps, router }: AppProps) {
  const query = useQueryNext();
  if (!query)
    return (
      <div className="flex h-screen">
        <div className="m-auto">
          <Spin size="large" />
        </div>
      </div>
    );
  return (
    <AppLayout query={router.query}>
      <Component {...pageProps} query={router.query} />
    </AppLayout>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default MyApp;
