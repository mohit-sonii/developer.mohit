import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface themeState {
   theme: 'light' | 'dark'
}
const initialState: themeState = {
   theme: 'light'
}
const themeSlice = createSlice({
   name: 'theme',
   initialState,
   reducers: {
      setTheme(state, action: PayloadAction<'light' | 'dark'>) {
         state.theme = action.payload
      }
   }
})

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer