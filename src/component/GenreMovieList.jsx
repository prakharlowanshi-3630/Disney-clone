import React from 'react'
import GenraList from '../Constant/GenraList'
import MovieList from './MovieList'

function GenreMovieList() {
  return (
    <div className=''>
    {
       GenraList.genere.map((item)=>(
        <div className='p-8 px-8 md:px-16 p-8'>
          <h2 className='font-bold '>{item.name}</h2>
           <MovieList genraid = {item.id}/>
        </div>
       ))
    }

    </div>
  )
}

export default GenreMovieList