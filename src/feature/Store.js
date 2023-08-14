import { configureStore} from "@reduxjs/toolkit";
import movieReducer from './Movies/MovieSlice';



export const Store = configureStore({
    reducer: {
        movies: movieReducer,

    },
    
});