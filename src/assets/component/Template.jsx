import React from 'react'



function Template(props) {
  return (
    <div
    className='w-full h-[100vh] bg-center bg-no-repeat bg-cover flex flex-col justify-around items-center'
    style={{ backgroundImage: `url(${urls[0].src})`}}>
    <p className='text-center text-white text-3xl mb-8'>{urls[0].des}</p>
    <p>{urls[0].placeName}</p>


  </div>
  )
}

export default Template
