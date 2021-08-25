import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchApartments } from './apartmentsAPI';

const initialState = {
  data: [],
  status: 'idle',
};

export const getAppartmenst = createAsyncThunk('apartments/get', async (amount) => {
  let apartments = await fetchApartments();
  apartments = apartments.response.map((e) => {
    e.like = false;
    return e;
  });
  return apartments;
});

export const counterSlice = createSlice({
  name: 'apartments',
  initialState,
  reducers: {
    toggleLike: (state, action) => {
      state.data[action.payload].like = !state.data[action.payload].like;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getAppartmenst.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getAppartmenst.fulfilled, (state, action) => {
        state.status = 'idle';
        state.data = action.payload;
      });
  },
});

export const { toggleLike } = counterSlice.actions;

export const selectApartments = (state) => state.apartments.data;
export const selectStatus = (state) => state.apartments.status;

export default counterSlice.reducer;
