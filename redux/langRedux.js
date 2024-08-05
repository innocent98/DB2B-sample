import {createSlice} from '@reduxjs/toolkit';

const langSlice = createSlice({
  name: 'language',
  initialState: {
    currentLang: 'en',
  },
  reducers: {
    updateLanguageState: (state, action) => {
      state.currentLang = action.payload;
    },
  },
});

export const {updateLanguageState} = langSlice.actions;
export default langSlice.reducer;
