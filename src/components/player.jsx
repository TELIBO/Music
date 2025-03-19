import React, { useContext } from 'react'
import { assets } from '../assets/frontend-assets/assets'
import { PlayerContext } from '../../context/PlayerContext'
const Player = () => {
    const {track,seekBar,seekBg,playStatus,play,pause,prev,next,time,seeksong} =useContext(PlayerContext);
  return (
    <div className='h-[10%] bg-black flex  text-white px-4'>
        <div className='hidden lg:flex items-center gap-4'>
            <div>
                <h4 className='inline'>Now Playing:</h4>
                <h4 className='inline ms-3'>{track.name}</h4>
            </div>
        </div>
        <div className='flex flex-col item-center gap-1 m-auto'>
            <div className='flex gap-4 item-center m-auto p-2'>
                <img src={assets.shuffle_icon} alt="" className='w-5 cursor-pointer'></img>
                <img onClick={()=>(prev())}src={assets.prev_icon} alt="" className='w-5 cursor-pointer'></img>
                {playStatus ? (
                <img 
                    onClick={pause} 
                    src={assets.pause_icon} 
                    alt="Pause" 
                    className='w-5 cursor-pointer'
                />
                ) : (
                <img 
                    onClick={play} 
                    src={assets.play_icon} 
                    alt="Play" 
                    className='w-5 cursor-pointer'
                />
                )}
                <img onClick={()=>(next())}src={assets.next_icon} alt="" className='w-5 cursor-pointer'></img>
                <img src={assets.loop_icon} alt="" className='w-5 cursor-pointer'></img>
            </div>
            <div className='flex item-center gap-5'>
                <p>
                {time.currentTime.minute}:{time.currentTime.second}
                </p>
                <div ref={seekBg} onClick={seeksong}className='w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer h-1 mt-3 '>
                    <hr ref={seekBar}className='h-1 border-none w-10 bg-green-800 rounded-full'>
                    </hr>
                </div>
                <p>
                {time.totalTime.minute}:{time.totalTime.second}
                </p>
            </div>
        </div>
        <div className=' hidden lg:flex items-center gap-2 opacity-75 '>
            <img className="w-4" src={assets.plays_icon} alt=''/>
            <img className="w-4" src={assets.mic_icon} alt=''/>
            <img className="w-4" src={assets.queue_icon} alt=''/>
            <img className="w-4" src={assets.speaker_icon} alt=''/>
            <img className="w-4" src={assets.volume_icon} alt=''/>
            <div className='w-20 bg-slate-50 h-1 rounded'>
            </div>
            <img className="w-4" src={assets.mini_player_icon} alt=''/>
            <img className="w-4" src={assets.zoom_icon} alt=''/>
        </div>
    </div>
  )
}

export default Player