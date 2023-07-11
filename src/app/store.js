import { configureStore } from '@reduxjs/toolkit';
import { fetchLocationsSlice } from '../Slice/locationsSlice';


export default configureStore({
  reducer: {
    fetchLocations: fetchLocationsSlice,
  },
});