import Head from "next/head";
import React from "react";
import Header from "./Header"

const Layout = ({ children }: any) => {
  return (
    <div>
      <Head>
        <title>Job Listings</title>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="description" content="Job listings web with next redux saga" />
        <link rel="icon" href="/images/favicon-32x32.png" />
      </Head>

      <Header/>
      { children }
    </div>
  );
}

export default Layout;