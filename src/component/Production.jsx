import React from 'react'
import disney from './../assets/Images/disney.png'
import marvel from './../assets/Images/marvel.png'
import nationalG from './../assets/Images/nationalG.png'
import pixar from './../assets/Images/pixar.png'
import starwar from './../assets/Images/starwar.png'
 
import starwarV from './../assets/Videos/star-wars.mp4'
import disneyV from './../assets/Videos/disney.mp4'
import marvelV from './../assets/Videos/marvel.mp4'
import nationalGeographicV from './../assets/Videos/national-geographic.mp4'
import pixarV from './../assets/Videos/pixar.mp4'




function Production() {
    const productionHouseList=[
        {
            id:1,
            image:disney,
            video:disneyV
        },
        {
            id:2,
            image:pixar,
            video:pixarV
        },
        {
            id:3,
            image:marvel,
            video:marvelV
        },
        {
            id:4,
            image:starwar,
            video:starwarV
        },
        {
            id:5,
            image:nationalG,
            video:nationalGeographicV
        },

    ]
  return (
    <div className='flex gap-2 md:gap-5 p-2 px-5 md:px-16'>
     {
        productionHouseList.map((item)=>{
            return(
                <div className='border-[2px] border-gray-600 mt-5 rounded-lg cursor-pointer relative shadow-xl shadow-red-500 hover:scale-110 transition-all duration-100 ease-in-out'>
                     <video src={item.video} autoPlay loop playsInline muted className='absolute top-0 opacity-0 hover:opacity-50'></video>
                    <img src={item.image} alt="" className='w-full' />
                    </div> 
              )
        })
     }

    </div>
  )
}

export default Production