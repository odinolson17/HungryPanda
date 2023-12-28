import { createSlice } from '@reduxjs/toolkit';

export const hungrypandaSlice = createSlice({
  name: 'hungrypanda',
  initialState: {
    user: {
      username: null,
      password: null,
      email: null
    }
  },
  reducers: {
    setUser: (state, action) => {
      Object.assign(state.user, action.payload);
    }
  }
});

export const {
  setUser
} = hungrypandaSlice.actions;

export default hungrypandaSlice.reducer;