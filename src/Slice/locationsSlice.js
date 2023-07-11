import { createSlice } from '@reduxjs/toolkit';

export const fecthLocationsSlice = createSlice({
  name: 'fetchLocations',
  initialState: {
    locations: [],
  },
  reducers: {
    setLocations: (state, action) => {
      state.locations = action.payload;
    }
  }
});


export const { setLocations } = fecthLocationsSlice.actions;
export default fecthLocationsSlice.reducer;