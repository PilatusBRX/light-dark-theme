import React from 'react';
import ThemeUi from './components/ThemeUi';
import SongContextProvider from './contexts/SongContext';

const App = () => {
  return (
    <div>
      <SongContextProvider>
        <ThemeUi />
      </SongContextProvider>
    </div>
  );
};

export default App;
