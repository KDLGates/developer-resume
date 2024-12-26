import React from "react";
import Head from "next/head";

export default function Header(props) {
  return (
    <>
      <Head>
        <title>Kristopher Gates - Software Developer</title>
        <meta
          property="og:title"
          content="Kristopher Gates - Software Developer"
          key="title"
        />
      </Head>
      <header className="app-header">
        <div className="heading__title">
          <h1>Kristopher Gates</h1>
          <h2>Software Developer</h2>
        </div>
        <div className="flexcols spacearound heading__controls"></div>
      </header>
    </>
  );
}
