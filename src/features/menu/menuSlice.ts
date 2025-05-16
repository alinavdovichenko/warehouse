import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api/api';

type MenuItem = {
  id: number;
  name: string;
  filial: { id: number; name: string };
  tt: { id: number; name: string };
  active: boolean;
  export: string[];
};

export const fetchMenu = createAsyncThunk(
  'menu/fetchMenu',
  async ({ filialId, limit, page }: { filialId: number; limit: number; page: number }) => {
    const response = await api.get(`/filial/${filialId}/menu/?limit=${limit}&page=${page}`);
    return response.data;
  }
);


const menuSlice = createSlice({
  name: 'menu',
  initialState: {
  items: [] as MenuItem[],
  totalPages: 1,
  status: 'idle',
  error: null as string | null,
  filters: {
    filialId: 1,
    active: null as boolean | null, // фильтр "Активно"
  },
  currentPage: 1,
},
reducers: {
  setFilters: (state, action) => {
    state.filters = { ...state.filters, ...action.payload };
    state.currentPage = 1; // сброс страницы при фильтре
  },
  setCurrentPage: (state, action) => {
    state.currentPage = action.payload;
  },
},

  extraReducers: builder => {
    builder
      .addCase(fetchMenu.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchMenu.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload.data; // массив меню
        state.totalPages = action.payload.max_pages;
      })
      .addCase(fetchMenu.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'Произошла ошибка';
      });
  },
});


export default menuSlice.reducer;
export const { setFilters, setCurrentPage } = menuSlice.actions;
export type { MenuItem };