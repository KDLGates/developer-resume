import React, { useState, useEffect } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import "lato-font";

export default function Home() {
  const [theme, setTheme] = useState("offwhite");

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme) {
      setTheme(theme);
    }
  }, []);

  function switchTheme(color) {
    setTheme(color);
    localStorage.setItem("theme", color);
  }

  return (
    <div id="trunk" data-theme={theme}>
      <Header theme={theme} switchTheme={switchTheme} />
      <Main />
      <Footer />
    </div>
  );
}
