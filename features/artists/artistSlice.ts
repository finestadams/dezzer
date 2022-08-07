import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentArtist: {},
 currentTrackId: '',
 currentArtistImage : '',
 currentSearch: '',
 currentNoOfFans: 0,
 currentArtistName: ''
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
    noOfFans: (state, { payload }) => {
      state.currentNoOfFans = payload;
    },
    artistName: (state, { payload }) => {
      state.currentArtistName = payload;
    },
  }
});

// Action creators are generated for each case reducer function
export const { artistData, artistTrackId, artistImage, searchArtist, noOfFans, artistName } = artistSlice.actions;

export default artistSlice.reducer;
