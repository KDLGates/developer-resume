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
        <div className="flexcols spacearound heading__controls">
          <form id="theme-picker">
            <span>Color Theme</span>
            <label>
              <input
                type="radio"
                id="select-offwhite"
                name="theme"
                onChange={() => props.switchTheme("offwhite")}
                checked={props.theme === "offwhite"}
              />{" "}
              Light
            </label>
            <label>
              <input
                type="radio"
                id="select-blue"
                name="theme"
                onChange={() => props.switchTheme("blue")}
                checked={props.theme === "blue"}
              />{" "}
              Blue
            </label>
          </form>
        </div>
      </header>
    </>
  );
}
