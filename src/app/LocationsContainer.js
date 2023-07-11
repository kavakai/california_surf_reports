import React from 'react';
import { useSelector } from 'react-redux';
import { Locations } from './Locations';

export const LocationsContainer = () => {
  const locations = useSelector((state) => state.fetchLocations.locations);

  const spots = locations.map((location) => { 
    return (
      <Locations
        key={location.spot_id} 
        spot_name={location.spot_name}
        street_address={location.street_address}
        id={location.spot_id}
      />
    )
  });

  return (
    <div className='container mx-auto flex flex-col justify-around items-center my-3'>
      {spots}
    </div>
  )
}
