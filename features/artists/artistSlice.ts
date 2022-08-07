import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentArtist: {},
 currentTrackId: '',
 currentArtistImage : '',
 currentSearch: ''
};

export const artistSlice = createSlice({
  name: 'artist',
  initialState,
  reducers: {
    //action would have type and payload

    artistData: (state, { payload }) => {
      state.currentArtist = payload;
    },
    artistTrackId: (state, { payload }) => {
      state.currentTrackId = payload;
    },
    artistImage: (state, { payload }) => {
      state.currentArtistImage = payload;
    },
    searchArtist: (state, { payload }) => {
      state.currentSearch = payload;
    },
  }
});

// Action creators are generated for each case reducer function
export const { artistData, artistTrackId, artistImage, searchArtist } = artistSlice.actions;

export default artistSlice.reducer;
