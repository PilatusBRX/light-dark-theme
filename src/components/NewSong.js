import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { MdPlaylistAdd } from 'react-icons/md';
import { SongContext } from '../contexts/SongContext';

const NewSong = () => {
  const { dispatch } = useContext(SongContext);
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [url, setUrl] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: 'ADD_SONG', song: { title, artist, url } });
    setTitle('');
    setUrl('');
    setArtist('');
  };

  return (
    <ModalWrapper className='modal-content'>
      <div className='add'>
        <a href='#add-a-song' rel='lightbox'>
          <MdPlaylistAdd className='add-button' title='add a song' />
        </a>
      </div>
      <div className='lightbox' id='add-a-song'>
        <h2>Add song in the list</h2>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            name='title'
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder='add the title...'
          />
          <input
            type='text'
            name='artist'
            value={artist}
            onChange={e => setArtist(e.target.value)}
            placeholder='add the artist...'
          />
          <input
            type='url'
            name='url'
            value={url}
            onChange={e => setUrl(e.target.value)}
            placeholder='add Youtube link of the video...'
          />
          <input type='submit' className='add-button' value='Add a Song' />
        </form>

        <a className='close' href='/'>
          &times;
        </a>
      </div>
    </ModalWrapper>
  );
};
const ModalWrapper = styled.div`
  a {
    color: #333;
  }

  .lightbox {
    background: #fff;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);
    border-radius: 12px;
    opacity: 0;
    padding: 30px;
    left: 50%;
    transform: translateX(-50%);
    top: 125px;
    visibility: hidden;
    width: 40%;
    position: absolute;
    z-index: 1;
    min-height: 55vh;
  }
  .lightbox:target {
    opacity: 1;
    visibility: visible;
    left: 50%;
    top: 3rem;
    position: absolute;
    transform: translate(-50%, 18%) scale(1.15);
    transition: all 0.25s;
  }
  .lightbox h2 {
    margin-bottom: 50px;
  }

  .lightbox .close {
    background: #fff;
    color: #000;
    display: block;
    font-weight: bold;
    height: 3rem;
    line-height: 3rem;
    text-align: center;
    text-decoration: none;
    width: 3rem;
    border-radius: 100%;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.5);
    position: absolute;
    top: -0.5rem;
    right: -0.5rem;
    font-size: 26px;
  }

  .add-button {
    font-size: 32px;
    color: #fff;
    cursor: pointer;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  form input {
    width: 65%;
    margin: 10px 0;
    border-radius: 5px;
    padding: 10px 20px;
    padding-left: 16px;
    border: none;
    height: 48px;
    outline-style: none;
    font-size: 16px;
    font-family: 'Oswald', sans-serif;
  }

  form .add-button {
    height: 48px;
    font-size: 16px;
    font-weight: bold;
  }
  @media screen and (max-width: 720px) {
    .lightbox {
      width: 92%;
    }
    form input {
      width: 75%;
      font-size: 15px;
    }
    .lightbox .close {
      top: 1rem;
    }
  }
`;
export default NewSong;
