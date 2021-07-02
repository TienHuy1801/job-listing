import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React from 'react';
import Head from 'next/head';
import store from '../store';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <Head>
          <title>Job Listings</title>
          <meta charSet="UTF-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <meta name="description" content="Job listings web with next redux saga" />
          <link rel="icon" href="/images/favicon-32x32.png" />
        </Head>

        <Component {...pageProps} />
      </Provider>
    </>
  );
}
export default MyApp
