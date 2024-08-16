// you don't have to edit this file, but you can modify just where you see comments below as the needs may be
// following the instructions of the comment.

import {combineReducers, configureStore} from '@reduxjs/toolkit';
// if you have other redux file(s) you can import them here like this:
import userReducer from './userRedux';
import langReducer from './langRedux';
import loginReducer from './loginRedux';
import cartReducer from './cartRedux';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  // you can call the imported redux here, making sure your key is same as the name of the slice
  // in your respective redux file
  user: userReducer,
  language: langReducer,
  loginAttempt: loginReducer,
  cart: cartReducer,
  // if you have other reducers, you can add them here as well.
  // if you have other reducers, you can add them here as well.
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
