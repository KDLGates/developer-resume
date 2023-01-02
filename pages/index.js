import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import useLocalStorage from 'use-local-storage';
// import "@fontsource/eb-garamond";
import "lato-font";


// import { ClientOnly } from 'react-client-only';

export default function Home() {
  const [theme, setTheme] = useLocalStorage('theme', 'offwhite');

  const switchTheme = (color) => {
    setTheme(color);
  };

  return (
    // <ClientOnly>
      <div id="trunk" data-theme={theme}>
        <Header theme={theme} switchTheme={switchTheme} />
        <Main />
        <Footer />
      </div>
    // </ClientOnly>
  );
}
