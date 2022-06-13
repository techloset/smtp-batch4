import {configureStore} from '@reduxjs/toolkit';
import CounterSlice from '../store/CounterSlicer';

const reducer = {
  counter: CounterSlice.reducer
};

const Store = configureStore({
  reducer,
});

export default Store;
