import React, { useContext } from 'react'
import {assets} from '../assets/frontend-assets/assets';
import { useNavigate } from 'react-router-dom';
import { PlayerContext } from '../../context/PlayerContext';
const Sidebar = () => {
    const navigate=useNavigate();
    const {track}=useContext(PlayerContext);
  return (
    <div  className='w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex'>
        <div className='bg-[#121212] h-[15%] rounded flex flex-col justify-around'>
            <div onClick={()=>navigate('/')} className='flex items-center gap-3 pl-8 cursor-pointer'>
                <img className="w-6"src={assets.home_icon} alt=''>
                </img>
                <p className='font-bold'>Home</p>
            </div>
            <div className='flex items-center gap-3 pl-8 cursor-pointer'>
                <img className="w-6"src={assets.search_icon} alt=''>
                </img>
                <p className='font-bold'>Search</p>
            </div>
        </div>
        <div className='flex items-center justify-center mt-2'>
            <img src={track.image} className='w-full'></img>
        </div>
        <div>
                <p className='text-center text-2xl'>{track.name}</p>
                <p className='text-center text-2xl'>{track.desc.slice(0,12)}</p>
        </div>
    </div>
  )
}
 export default Sidebar;
