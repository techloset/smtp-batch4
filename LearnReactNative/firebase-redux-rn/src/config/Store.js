import {configureStore} from '@reduxjs/toolkit';
import authSlicer from '../store/authSlicer';
import CounterSlice from '../store/CounterSlicer';

const reducer = {
  counter: CounterSlice.reducer,
  auth: authSlicer.reducer
};

const Store = configureStore({
  reducer,
});

export default Store;
