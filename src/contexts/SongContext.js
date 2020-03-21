import React, { createContext, useEffect, useReducer } from 'react';
import SongReducer from '../reducers/SongReducer';
import uuid from 'uuid/v4';
export const SongContext = createContext();

const SongContextProvider = props => {
  const [songs, dispatch] = useReducer(SongReducer, [], () => {
    const localData = localStorage.getItem('songs');
    return localData
      ? JSON.parse(localData)
      : [
          {
            id: uuid(),
            title: 'Bad',
            artist: 'Michael Jackson',
            url: 'https://www.youtube.com/watch?v=dsUXAEzaC3Q',
            like: true
          },
          {
            id: uuid(),
            title: 'Dumb',
            artist: ' Nirvana',
            url: 'https://www.youtube.com/watch?v=4xRuxuHjBY4',
            like: false
          },
          {
            id: uuid(),
            title: 'Aquarela',
            artist: 'Toquinho',
            url: 'https://www.youtube.com/watch?v=4xRuxuHjBY4',
            like: true
          },
          {
            id: uuid(),
            title: 'Paranoid',
            artist: 'Black Sabbath',
            like: false,
            url: 'https://www.youtube.com/watch?v=0qanF-91aJo'
          }
        ];
  });
  useEffect(() => {
    localStorage.setItem('songs', JSON.stringify(songs));
  }, [songs]);

  return (
    <SongContext.Provider value={{ songs, dispatch }}>
      {props.children}
    </SongContext.Provider>
  );
};

export default SongContextProvider;
