import React, { useEffect, useState } from 'react'
import GlobalAPI from '../Services/GlobalAPI'
import MovieCard from './MovieCard';

function MovieList({genraid}) {
    const[movie, setmovie] = useState([]);
    useEffect(()=>{
   
        getgenrawithid();
    },[]);

    const getgenrawithid = ()=>{
        GlobalAPI.getgenrawithid(genraid).then(resp =>{
          setmovie(resp.data.results);
        })
    }
  return (
    <div className='flex gap-5 overflow-x-auto scrollbar-hide ' >
    {movie.map((item)=>(
        <MovieCard movie = {item}/>
    ))

}
    </div>
  )
}

export default MovieList