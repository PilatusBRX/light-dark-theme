import uuid from 'uuid/v4';

const songReducer = (state, action) => {
  switch (action.type) {
    //add song
    case 'ADD_SONG':
      return [
        ...state,
        {
          title: action.song.title,
          singer: action.song.artist,
          url: action.song.url,
          id: uuid()
        }
      ];
    //remove song
    case 'REMOVE_SONG':
      return state.filter(song => song.id !== action.id);

    //toggle song
    case 'TOGGLE_SONG':
      return state.map(song =>
        song.id === action.id ? { ...song, like: !song.like } : song
      );

    default:
      return state;
  }
};
export default songReducer;
