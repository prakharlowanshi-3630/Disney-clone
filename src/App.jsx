import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Header from './component/Header'
import Slider from './component/Slider'
import Production from './component/Production'
import GenreMovieList from './component/GenreMovieList'

function App() {
 

  return (
    <>
     <div className=''> 
     <Header/>
     <Slider></Slider>
     <Production></Production>
     <GenreMovieList></GenreMovieList>
     </div>
        
    </>
  )
}

export default App
