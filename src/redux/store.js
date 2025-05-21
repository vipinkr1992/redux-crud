/* import {createStore,applyMiddleware} from 'redux';
import  {thunk} from 'redux-thunk';
import rootReducer from './rootReducer'; */
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/user.slice';

/* const middleware = [thunk]
const store = createStore(rootReducer,applyMiddleware(...middleware)); */

const store = configureStore({
reducer:{
   users:userReducer,
 }
});

export default store;