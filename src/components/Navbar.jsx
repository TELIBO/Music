import React from 'react'
import { assets } from '../assets/frontend-assets/assets'
import { useNavigate } from 'react-router-dom'
const Navbar = () => {
  const navigate=useNavigate()
  return (
    <>
     <div className='w-full flex justify-between item-center font-semibold'>
        <div className='flex item-center gap-2'>
            <img src={assets.arrow_left} alt="" className='w-8 bg-black p-2 rounded-2x1 cursor-pointer'
            onClick={()=>(navigate(-1))}></img> 
            <img src={assets.arrow_right} alt="" className='w-8 bg-black p-2 rounded-2x1 cursor-pointer' onClick={()=>(navigate(1))}></img> 
        </div>
        <div className='flex items-center gap-4'>
            <p className='bg-purple-500 text-black w-7 h-7 rounded-full flex items-center justify-center'>P</p>
        </div>
     </div>
    </>
  )
}

export default Navbar