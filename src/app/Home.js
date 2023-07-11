'use client';

import React from 'react';
import Image from 'next/image';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setLocations } from '../Slice/locationsSlice';

export const Home = () => {
  const locations = useSelector((state) => state.fetchLocations.locations);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchLocations = async () => {
      const res = await fetch('https://services.surfline.com/kbyg/spots/forecasts?spotId=5842041f4e65fad6a7708b2b&days=1&intervalHours=24&maxHeights=false&accesstoken=9e6e3a0e9f5b4f0c9b5b2b0a0e4e8b6b');
      const data = await res.json();
      dispatch(setLocations(data.data));
    }
    fetchLocations();
  }, [dispatch, locations]);
  
  return (
    <div className='container mx-auto flex flex-col justify-around items-center h-screen'>
    {console.log(locations, "locations")}
      <h1 className='text-2xl'>California Surf Reports</h1>
      <Image width={700} height={700} className='rounded-md drop-shadow-2xl' src="https://www.seekpng.com/png/detail/337-3373081_enso-water-still-shinichi-maruyama.png" alt="Enso Water Still - Shinichi Maruyama@seekpng.com" />  
  </div>
  )
}
