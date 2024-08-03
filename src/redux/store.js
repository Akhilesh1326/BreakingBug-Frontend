import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './userSlice';

const store = configureStore({
    //Mustn't be reduce={}, should be reducer:{}
    reducer:{
        user: userReducer,
    }
});

export default store;