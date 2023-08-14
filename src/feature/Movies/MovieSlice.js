import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";
import MoveAPI from "../../commponent/Api/MoveAPI";
import { APIKey } from '../../commponent/Api/MoveAPIKey';

const initialState={
    movies: {},
}

 export const fetchAsyncMovies = createAsyncThunk(
    'movies/fetchAsyncMovies', 
     async()=>{
    const movieText = "Harry";
    const response = await MoveAPI
    .get(`http://www.omdbapi.com/?apikey=${APIKey}&s=${movieText}&type=movie`)
       return response.data;
}
);

export const movieSlice= createSlice ({
    name:"movies" ,
    initialState,
    reducers:{
        addMovies:(state, {payload}) => {
            state.movies =payload;
        },
    },
   extraReducers:{
    [fetchAsyncMovies.pending]: () => {
        console.log("Pending");
    },
    [fetchAsyncMovies.fulfilled]: (state, {payload}) => {
        console.log("Fetched succesfully");
        return {...state, movies: payload};

    },
    [fetchAsyncMovies.rejected]: () => {
        console.log("Rejected");
        

    },
   }
});

export const {addMovies } = movieSlice.actions;
export const getAllMovies=(state)=> state.movies.movies;
export default movieSlice.reducer;