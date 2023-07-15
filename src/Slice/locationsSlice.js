import { createSlice } from '@reduxjs/toolkit';

export const fetchLocationsSlice = createSlice({
  name: 'fetchLocations',
  initialState: {
    locations: [],
    singleLocation: [],
  },
  reducers: {
    setLocations: (state, action) => {
        state.locations = [...action.payload.locations];
      },
    setSingleLocation: (state, action) => {
        state.singleLocation = [...action.payload.singleLocation];
      },
    },
});


export const { setLocations, setSingleLocation } = fetchLocationsSlice.actions;
export default fetchLocationsSlice.reducer;