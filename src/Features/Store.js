import {configureStore} from "@reduxjs/toolkit";
import moviesReducer from "./movies/movieSlice"
 const Store= configureStore({
    reducer:{
    movies :moviesReducer,
    }

});
export default Store;