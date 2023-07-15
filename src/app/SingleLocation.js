import React from 'react';
import { useSelector } from 'react-redux';

export const SingleLocation = () => {
  const singleLocation = useSelector((state) => state.fetchLocations.singleLocation);
  console.log(singleLocation, 'singleLocation')

  return (
    <div>SingleLocation</div>
  )
}
