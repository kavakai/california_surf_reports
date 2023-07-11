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
      const res = await fetch('https://api.spitcast.com/api/spot');
      const data = await res.json();
      dispatch(setLocations({type: 'fetchLocations/setLocations', locations: data}));
    }
    fetchLocations();
  }, []);
  
  return (
    <div className='container mx-auto flex flex-col justify-around items-center h-screen'>
    {console.log(locations, "locations")}
      <h1 className='text-2xl'>California Surf Reports</h1>
      <Image width={700} height={700} className='rounded-md drop-shadow-2xl' src="https://www.seekpng.com/png/detail/337-3373081_enso-water-still-shinichi-maruyama.png" alt="Enso Water Still - Shinichi Maruyama@seekpng.com" />  
  </div>
  )
}
