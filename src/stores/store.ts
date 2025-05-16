import { configureStore } from '@reduxjs/toolkit';
import filialReducer from '../features/filial/filialSlice';
import menuReducer from '../features/menu/menuSlice';

export const store = configureStore({
  reducer: {
    filial: filialReducer,
    menu: menuReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
