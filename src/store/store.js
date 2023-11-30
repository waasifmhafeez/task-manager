import { configureStore } from '@reduxjs/toolkit';
import boardReducer from '../../src/store/slices/boardSlice';
import taskSlice from './slices/taskSlice';

const store = configureStore({
  reducer: {
    Board: boardReducer,
    Task : taskSlice
  },
});

export default store;