import {createSlice} from '@reduxjs/toolkit';

const loginSlice = createSlice({
  name: 'loginAttempt',
  initialState: {
    loginCount: 0,
  },
  reducers: {
    updateLoginCount: (state, action) => {
      state.loginCount = action.payload;
    },
  },
});

export const {updateLoginCount} = loginSlice.actions;
export default loginSlice.reducer;
