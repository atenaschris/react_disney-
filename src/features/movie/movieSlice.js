import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recommend: null,
  newDisney: null,
  original: null,
  trending: null,
  singleMovie:{},
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovies(state, action) {
      state.recommend = action.payload.recommend;
      state.newDisney = action.payload.newDisney;
      state.original = action.payload.original;
      state.trending = action.payload.trending;
      state.singleMovie = {};
    },
    getSingleMovie(state,action){
      state.recommend = state.recommend;
      state.newDisney = state.newDisney;
      state.original= state.original;
      state.trending= state.trending;
      state.singleMovie = action.payload.singleMovie;
    }
  },
});

export const selectRecommend = (state) => state.movie.recommend;
export const selectNewDisney = (state) => state.movie.newDisney;
export const selectOriginal = (state) => state.movie.original;
export const selectTrending = (state) => state.movie.trending;
export const selectSingleMovie = (state)=> state.movie.singleMovie;

export const { setMovies,getSingleMovie } = movieSlice.actions;

export default movieSlice.reducer;
