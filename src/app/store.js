import { configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
// create store and combine reducers

import userReducer from '../features/UserSlice'

export const store = configureStore({

    //this is combine or root reducer
    reducer:{
        user:userReducer,
        
    }
},composeWithDevTools)