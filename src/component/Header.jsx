import React, { useState } from 'react'
import logo from "./../assets/Images/logo.png"
import { HiHome ,HiMagnifyingGlass , HiStar,HiPlayCircle,HiTv} from "react-icons/hi2";
import { HiPlus ,HiDotsVertical} from "react-icons/hi";
import HeaderItem from './HeaderItem';

function Header() {
    const[toggle , settoggle] = useState(false);
    const menu=[
        {
            name:'HOME',
            icon:HiHome
        },
        {
            name:'SEARCH',
            icon:HiMagnifyingGlass
        },
        {
            name:'WATCH LIST',
            icon:HiPlus
        },
        {
            name:'ORIGINALS',
            icon:HiStar
        },
        {
            name:'MOVIES',
            icon:HiPlayCircle
        },
        {
            name:'SERIES',
            icon:HiTv
        }
    ]
  return (
    <div className='  flex select-none items-center justify-between pl-5 pr-5'>
     <div className='flex items-center gap-8'> 
        
    <img src={logo} alt="" className='w-[90px] md:w-[115px] lg:w-[140px] object-cover'  />
    <div className=' hidden md:flex gap-8 '>
    {
        menu.map((item)=>(
            <HeaderItem name = {item.name} Icon = {item.icon}/>
        ))
    }
    </div>
    <div className=' flex  gap-5  md:hidden' >
    {
        menu.map((item , index)=>index<3&&(
            <HeaderItem name = {''} Icon = {item.icon}/>
        ))
    }
    </div>
    <div className='md:hidden' onClick={()=>settoggle(!toggle)} >
    
       
        <HeaderItem name = {""} Icon = {HiDotsVertical}/>
            
       {toggle?  <div className=' absolute mt-3 bg-[#121212] border-[1px] border-gray-700 p-3 px-5 py-4 ' >
         {
        menu.map((item , index)=>index>2&&(
            <HeaderItem name = {item.name} Icon = {item.icon}/>
        ))
         }
    </div>:null}
        
    
    </div>
    </div>
     <img src="https://img.freepik.com/free-vector/cool-beard-man-barber-head-with-glasses-cartoon-vector-icon-illustration-people-barber-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-3960.jpg?w=740&t=st=1707577374~exp=1707577974~hmac=e89d28ee62d66974e2125e7bb571f20f673350c0004dc467e90ff4eedebdd6ff"
      alt=""className='w-[40px] h-[40px] rounded-full' />

    </div>
  )
}

export default Header