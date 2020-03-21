import React, { useContext } from 'react';
import NewSong from './NewSong';
import { SongContext } from '../contexts/SongContext';
import styled from 'styled-components';

const Nav = ({ dark, ChangeThemeMode }) => {
  const { songs } = useContext(SongContext);
  const count = songs.length;
  return (
    <NavWrapper>
      <div className='nav'>
        <label className='switch'>
          <input type='checkbox' onChange={ChangeThemeMode} checked={dark} />
          <span className='slider round'></span>
        </label>
        <div className='center'>
          <h1>Sonora Song List</h1>
          <h3>
            {count === 0
              ? 'You do not have songs in list yet'
              : `You have ${count} songs`}
          </h3>
          <NewSong />
        </div>
      </div>
    </NavWrapper>
  );
};

const NavWrapper = styled.nav`
  .center {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    height: 100%;
    width: 500px;
    margin: auto;
    color: #fff;
  }
  .center h1 {
    font-size: 42px;
    margin-bottom: 20px;
  }
  .center h3 {
    font-size: 20px;
    font-family: 'Nunito', sans-serif;
    margin-bottom: 32px;
  }
  @media screen and (max-width: 500px) {
    .center h1 {
      font-size: 32px;
      margin-left: -2rem;
    }
    .center h3 {
      font-size: 16px;
      margin-left: -2rem;
    }
  }
`;

export default Nav;
