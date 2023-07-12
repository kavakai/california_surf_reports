import React from 'react'

export const Locations = ({spot_name, street_address, id}) => {
  console.log(location, "location")
  return (
    <div className='container flex justify-center items-center w-fit hover:scale-110 cursor-pointer'>
      <h1>{spot_name}</h1> 
      <h2>{street_address}</h2>
    </div>
  )
}
