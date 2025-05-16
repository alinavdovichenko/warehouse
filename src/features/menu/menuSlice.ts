import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api/api';

export const fetchMenu = createAsyncThunk(
  'menu/fetchMenu',
  async (filialId: number) => {
    const response = await api.get(`/filial/${filialId}/menu/`);
    return response.data;
  }
);

const menuSlice = createSlice({
  name: 'menu',
  initialState: {
    items: [],
    status: 'idle',
    error: null as string | null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchMenu.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchMenu.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchMenu.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'Произошла ошибка';
      });
  },
});

export default menuSlice.reducer;
