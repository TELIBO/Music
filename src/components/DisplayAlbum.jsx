import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { albumsData, assets, songsData } from '../assets/frontend-assets/assets';
import Navbar from './Navbar';
import { PlayerContext } from '../../context/PlayerContext';
const DisplayAlbum = () => {
    const {id} =useParams();
    const albumdata=albumsData[id];
    const {playwithid}=useContext(PlayerContext);
  return (
    <>
    <Navbar/>
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row md:items-center gap-8">
        <img 
          className="w-64 h-64 object-cover rounded-lg shadow-lg" 
          src={albumdata.image} 
          alt={`${albumdata.name} cover`}
        />
        <div className="flex flex-col">
          <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">
            Playlist
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mt-2 mb-4">
            {albumdata.name}
          </h1>
          <p className="text-lg text-gray-700 mb-4">
            {albumdata.desc}
          </p>
          <div className="flex items-center text-sm text-gray-600">
            <img 
              className="w-5 h-5 mr-2" 
              src={assets.pause_icon} 
              alt="Pause icon"
            />
            <span className="font-semibold mr-2">Musicly</span>
            <span className="mr-2">•</span>
            <span className="mr-2">1,323,154 likes</span>
            <span className="mr-2">•</span>
            <span className="font-semibold">50 songs,</span>
            <span className="ml-1">about 2 hr 30 min</span>
          </div>
        </div>
      </div>
    </div>
    <div className="mt-10 mb-4">
      <div className="grid grid-cols-3 sm:grid-cols-4 pl-2 text-[#a7a7a7] font-medium mb-2">
        <div><span className="mr-4">#</span>Title</div>
        <div className="hidden sm:block">Album</div>
        <div className="hidden sm:block">Date Added</div>
        <div className="flex justify-end pr-5 pb-1">
          <img src={assets.clock_icon} className="w-5" alt="Duration" />
        </div>
      </div>
      <hr  />
      {songsData.map((item, index) => (
        <div onClick={()=>playwithid(item.id)}
          key={item.id || index}
          className="grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer"
        >
          <div className="flex items-center">
            <span className="w-8 text-right mr-4">{index + 1}</span>
            <img className="w-10 h-10 mr-5 object-cover" src={item.image} alt={`${item.name} cover`} />
            <span className="text-white truncate">{item.name}</span>
          </div>
          <p className='text-[15px] hidden sm:block'>{albumdata.name}</p>
          <p className='text-[15px] hidden sm:block '>5 days ago</p>
          <div className="text-right pr-4">{item.duration}</div>
        </div>
      ))}
    </div>
    </>
  )
}

export default DisplayAlbum