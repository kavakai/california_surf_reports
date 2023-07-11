import { createSlice } from '@reduxjs/toolkit';

export const fetchLocationsSlice = createSlice({
  name: 'fetchLocations',
  initialState: {
    locations: [],
  },
  reducers: {
    setLocations: (state, action) => {
        state.locations = [...action.payload.locations];
      }
    }
});


export const { setLocations } = fetchLocationsSlice.actions;
export default fetchLocationsSlice.reducer;