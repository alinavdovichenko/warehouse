import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api/api';
import { Filial } from '../../types/filial';

interface FilialState {
  filials: Filial[];
  selected: Filial | null;
  status: string;
  error: string | null;
}

const initialState: FilialState = {
  filials: [],
  selected: null,
  status: 'idle',
  error: null,
};

export const fetchFilials = createAsyncThunk('filial/fetchAll', async () => {
  const response = await api.get('/filial/');
  return response.data;
});

const filialSlice = createSlice({
  name: 'filial',
  initialState,
  reducers: {
    setSelectedFilial: (state, action) => {
      state.selected = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchFilials.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchFilials.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.filials = action.payload;
      })
      .addCase(fetchFilials.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'Произошла ошибка';
      });
  },
});

export const { setSelectedFilial } = filialSlice.actions;
export default filialSlice.reducer;
