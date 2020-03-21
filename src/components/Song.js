import React, { useContext } from 'react';
import { MdFavorite } from 'react-icons/md';
import { IoIosMusicalNotes } from 'react-icons/io';
import { FaRegTimesCircle } from 'react-icons/fa';
import styled from 'styled-components';
import { SongContext } from '../contexts/SongContext';

const Song = ({ song }) => {
  const { dispatch } = useContext(SongContext);
  return (
    <ItemWrapper>
      <div className='items'>
        <li>
          <span>
            <a href={song.url} target='_blank'>
              {song.title}
            </a>
            <IoIosMusicalNotes style={{ fontSize: '16.5px' }} />
          </span>
          <p>{song.artist}</p>
        </li>

        <div className='icons'>
          <FaRegTimesCircle
            className='icon-delete'
            onClick={() => dispatch({ type: 'REMOVE_SONG', id: song.id })}
          />
          <MdFavorite
            className='icon-like'
            style={{ color: song.like ? 'crimson' : '#aca8a8' }}
            onClick={() => dispatch({ type: 'TOGGLE_SONG', id: song.id })}
          />
        </div>
      </div>
    </ItemWrapper>
  );
};

const ItemWrapper = styled.div`
  .items {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    max-width: 720px;
    width: 100%;
    margin: 16px auto;
    padding: 10px 20px;
    border-radius: 5px;
  }

  li {
    list-style: none;
  }
  li span {
    font-size: 24px;
  }
  li p {
    font-size: 13px;
    color: #5c5d5e;
    font-family: 'Nunito', sans-serif;
  }
  .icons {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    position: relative;
    top: -5px;
  }

  .icons .icon-delete {
    font-size: 13px;
    cursor: pointer;
    margin-bottom: 16px;
  }

  .icons .icon-like {
    cursor: pointer;
  }
`;

export default Song;
