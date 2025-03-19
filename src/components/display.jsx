import React, { useRef, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './Home';
import DisplayAlbum from './DisplayAlbum';
import { albumsData } from '../assets/frontend-assets/assets';

const Display = () => {
  const display = useRef();
  const location = useLocation();
  const isAlbum = location.pathname.includes("album");
  const albumId = isAlbum ? location.pathname.split('/').pop() : "";
  const bgcolor = albumId ? albumsData[Number(albumId)].bgColor : "";

  useEffect(() => {
    if (isAlbum && bgcolor) {
      display.current.style.background = `linear-gradient(${bgcolor}, #121212)`;
    } else {
      display.current.style.background = "#121212";
    }
  }, [isAlbum, bgcolor]);

  return (
    <div ref={display} className='w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/album/:id' element={<DisplayAlbum />} />
      </Routes>
    </div>
  );
};

export default Display;