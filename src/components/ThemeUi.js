import React, { useState, useEffect } from 'react';
import '../App.css';
import Nav from './Nav';
import SongList from './SongList';
import Footer from './Footer';

const ThemeUi = () => {
  const getMode = () => {
    return JSON.parse(localStorage.getItem('mode')) || false;
  };
  const [dark, setMode] = useState(getMode());

  useEffect(() => {
    localStorage.setItem('mode', JSON.stringify(dark));
  }, [dark]);

  const ChangeThemeMode = () => {
    setMode(!dark);
  };

  return (
    <div className={dark ? 'App dark-mode' : 'App'}>
      <Nav dark={dark} ChangeThemeMode={ChangeThemeMode} />
      <SongList />
      <Footer />
    </div>
  );
};

export default ThemeUi;
