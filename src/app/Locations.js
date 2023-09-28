import React from 'react';
import { setSingleLocation } from 'src/Slice/locationsSlice';
import { useDispatch } from 'react-redux';

export const Locations = ({spot_name, street_address, id}) => {
  const dispatch = useDispatch();
  const date = new Date();
  const lat = 58.7984;
  const lng = 17.8081;
  const params = 'windSpeed';

  const handleClick = (e) => {
    e.preventDefault();
    
    const fetchSingleLocation = async () => {
      const res = await fetch(`https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${params}`, {
        headers: {
          'Authorization': process.env.API_KEY
        }
      });
      const data = await res.json();
      dispatch(setSingleLocation({type: 'fetchLocations/setSingleLocation', singleLocation: data}));
    }
    fetchSingleLocation();
  }

  return (
    <div 
      className='container flex justify-center items-center w-fit hover:scale-110 cursor-pointer'
      onClick={(e) => handleClick(e)}
    >
      <h1>{spot_name}</h1> 
      <h2>{street_address}</h2>
    </div>
  )
}
