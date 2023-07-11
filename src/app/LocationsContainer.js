import React from 'react';
import { useSelector } from 'react-redux';
import { Locations } from './Locations';

export const LocationsContainer = () => {
  const locations = useSelector((state) => state.fetchLocations.locations);

  const spots = locations.map((location) => { 
    return (
      <Locations
        key={location.spot_id} 
        location={location} 
      />
    )
  });

  return (
    <div>
      {spots}
    </div>
  )
}
