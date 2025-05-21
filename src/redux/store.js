/* import {createStore,applyMiddleware} from 'redux';
import  {thunk} from 'redux-thunk';
import rootReducer from './rootReducer'; */
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/user.slice';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';

/* const middleware = [thunk]
const store = createStore(rootReducer,applyMiddleware(...middleware)); */

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
reducer:{
   users:userReducer,
 },
 middleware:(getDefaultMiddleware) => 
    getDefaultMiddleware({thunk:false}).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;