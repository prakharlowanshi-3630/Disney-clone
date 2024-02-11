import React from 'react'

function MovieCard({movie}) {
    const IMG_BaseURL = "https://image.tmdb.org/t/p/original";
  return (
    <>
        
            <img src={IMG_BaseURL+movie.poster_path} alt="" className='w-[110px] md:w-[220px] border-[2px] rounded-lg border-gray-600 hover:scale-110 transition-all duration-100 ease-in-out' />
    
    </>
  )
}

export default MovieCard