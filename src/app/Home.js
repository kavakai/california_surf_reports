'use client';

import React from 'react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setLocations } from '../Slice/locationsSlice';
import { LocationsContainer } from './LocationsContainer';
import { SingleLocation } from './SingleLocation';

export const Home = () => {
  const dispatch = useDispatch();
  const singleLocation = useSelector((state) => state.fetchLocations.singleLocation);
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');

  // useEffect(() => {
  //   const fetchLocations = async () => {
  //     const res = await fetch('https://api.stormglass.io/v2', {
  //       headers: {
  //         'Authorization': process.env.WEATHER_API_KEY
  //       }
  //     });
  //     const data = await res.json();
  //     dispatch(setLocations({type: 'fetchLocations/setLocations', locations: data}));
  //   }
  //   fetchLocations();
  // }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // const fetchLocations = async () => {
    //   const res = await fetch(`https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${params}`, {
    //     headers: {
    //       'Authorization': process.env.API_KEY
    //     }
    //   });
    //   const data = await res.json();
    //   dispatch(setLocations({type: 'fetchLocations/setLocations', locations: data}));
    // }
    // fetchLocations();
  };
  
  return (
    <div className='container mx-auto flex flex-col justify-around items-center h-full'>
      <h1 className='text-2xl'>California Surf Reports</h1>
      <Image width={700} height={700} className='rounded-md drop-shadow-2xl' src="https://www.seekpng.com/png/detail/337-3373081_enso-water-still-shinichi-maruyama.png" alt="Enso Water Still - Shinichi Maruyama@seekpng.com" /> 
      {singleLocation.length ? <SingleLocation /> : <LocationsContainer />}
      <form className='flex flex-col justify-center items-center' onSubmit={handleSubmit}>
        <input 
          className='border-2 border-white rounded-md text-black' 
          type='text' 
          placeholder='Enter City' 
          name='city' 
          value={city}
          onChange={(e) => setCity(e.target.value)}
          />
        <input 
          className='border-2 border-white rounded-md text-black' 
          type='text' 
          placeholder='Enter Country' 
          name='country' 
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          />
        <button className='border-2 border-white rounded-md' type='submit'>Submit</button>
      </form>
  </div>
  )
}
