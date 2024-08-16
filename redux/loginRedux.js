import {createSlice} from '@reduxjs/toolkit';

const loginSlice = createSlice({
  name: 'loginAttempt',
  initialState: {
    loginCount: 0,
    expiresIn: 0,
    isExpired: false,
  },
  reducers: {
    updateLoginCount: (state, action) => {
      state.loginCount = action.payload;
    },
    updateExpiresIn: (state, action) => {
      state.expiresIn = action.payload;
    },
  },
});

export const {updateLoginCount, updateExpiresIn} = loginSlice.actions;
export default loginSlice.reducer;
