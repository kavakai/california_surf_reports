import React from 'react'

export const Locations = (location) => {
  return (
    <div>
      <h1>{location.spot_name}</h1>
      <h2>{location.street_address}</h2>
    </div>
  )
}
