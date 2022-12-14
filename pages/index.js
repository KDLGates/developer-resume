import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, { useState } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faGlobe, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
// import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro';
// import useLocalStorage from 'use-local-storage';

import { ClientOnly } from 'react-client-only';

export default function Home() {
  const [theme, setTheme] = useState('blue');

  const switchTheme = (color) => {
    setTheme(color);
  };

  return (
    <ClientOnly>
      <div id="trunk" data-theme={theme}>
        <Header theme={theme} switchTheme={switchTheme} />
        <Main />
        <Footer />
      </div>
    </ClientOnly>
  );
}
