import React from 'react';
import { setSingleLocation } from 'src/Slice/locationsSlice';
import { useDispatch } from 'react-redux';

export const Locations = ({spot_name, street_address, id}) => {
  const dispatch = useDispatch();
  const date = new Date();

  const handleClick = (e) => {
    e.preventDefault();
    
    const fetchSingleLocation = async () => {
      const res = await fetch(`https://api.spitcast.com/api/spot_forecast/${id}/${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`);
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
