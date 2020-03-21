import React, { useContext } from 'react';
import Song from './Song';

import { SongContext } from '../contexts/SongContext';
import styled from 'styled-components';

const SongList = ({ toggleLike, removeSong }) => {
  const { songs } = useContext(SongContext);
  return (
    <SongListWrapper>
      <div className='content'>
        <div className='song-list-section'>
          <ul className='song-list'>
            {songs.map(song => {
              return (
                <Song
                  key={song.id}
                  id={song.id}
                  song={song}
                  toggleLike={toggleLike}
                  removeSong={removeSong}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </SongListWrapper>
  );
};
const SongListWrapper = styled.div`
  .content {
    padding: 40px;
  }
  .song-list-section {
  }
`;
export default SongList;
