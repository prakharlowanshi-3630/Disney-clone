import React, { useEffect, useRef, useState } from 'react'
import GlobalAPI from '../Services/GlobalAPI';
import { HiChevronLeft,HiChevronRight } from "react-icons/hi";

function Slider() {
    const[moviesList , setmoviesList] = useState([]);
    const IMG_BaseURL = "https://image.tmdb.org/t/p/original";
    const elementref = useRef();
    const screenwidht = window.innerWidth;
    useEffect(()=>{
        getTrendingVideos();
    })

    const sliderleft = (element) =>{
        element.style.scrollBehavior = "smooth";
        element.scrollLeft-= screenwidht-80;
    }
    const sliderRight = (element) =>{
        element.style.scrollBehavior = "smooth";
        element.scrollLeft+= screenwidht-80;
    }
  
  
   const getTrendingVideos = ()=>{
    GlobalAPI.getTrendingVideos.then(resp=>{
        const data =resp.data.results;
        console.log(data);
        setmoviesList(data);
    })
    console.log(moviesList);
   
   }
  return (
     <div>
        <HiChevronLeft className=' hidden md:block absolute text-white text-[40px] mt-[180px] mx-5 cursor-pointer' onClick={()=>sliderleft(elementref.current)}/>
        <HiChevronRight className=' hidden md:block absolute text-white text-[40px] mt-[180px] mx-5 right-0  cursor-pointer' onClick={()=>sliderRight(elementref.current)}/>
    <div className='flex w-full  overflow-x-auto px-14  scrollbar-hide ' ref={elementref}>
        {
            moviesList.map((item,index)=>(
                <img src={IMG_BaseURL+item.backdrop_path} alt="" className='min-w-full object-right-top md:h-[360px] rounded-lg object-cover mr-8 hover:border-[3px] border-gray-700 transition-all duration-100 ease-in-out' />
            ))
        }
    </div>
    </div>
  )
}

export default Slider