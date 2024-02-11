import React from 'react'

function HeaderItem({name , Icon}) {
  return (
    <div className='flex gap-3 text-white items-center cursor-pointer font-semibold font-[18px] hover:underline underline-offset-8 mb-3'>
        <Icon/>
        <div className=''>{name}</div>
        
    </div>
  )
}

export default HeaderItem