import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { songsData } from '../assets/assets'
import { PlayerContext } from '../Context/PlayerContext'
// import { playerContext } from '../Context/PlayerContext'

const Player = () => {

    const handleVolumeChange = (e) => {
        const newVolume = e.target.value / 100; // Convert from percentage to 0-1 range
        adjustVolume(newVolume);
      }

    // const {play} = useContext(playerContext)
    const {seekBar, seekBg, play, pause, track, playStatus, prevSong, nextSong, time, seekSong, volume, adjustVolume} = useContext(PlayerContext);
    return (
        <div className='h-[10%] bg-[#121212] flex justify-between items-center text-white px-4'>

            {/* ----- first section -----  */}
            <div className="hidden lg:flex items-center gap-4">
                <img className='w-12' src={track.image} alt="" />

                <div>
                    <p>{track.name}</p>
                    <p>{track.desc.slice(0,12)}</p>
                </div>
            </div>

            {/* ----- Second section -----  */}
            <div className='flex flex-col items-center gap-1 m-auto'>
                <div className="flex gap-4">
                    <img className='w-4 cursor-pointer' src={assets.shuffle_icon} alt="" />
                    <img onClick={prevSong} className='w-4 cursor-pointer' src={assets.prev_icon} alt="" />
                    {playStatus ? <img onClick={pause} className='w-4 cursor-pointer' src={assets.pause_icon} alt="" /> : <img onClick={play} className='w-4 cursor-pointer' src={assets.play_icon} alt="" />}
                    <img onClick={nextSong} className='w-4 cursor-pointer' src={assets.next_icon} alt="" />
                    <img className='w-4 cursor-pointer' src={assets.loop_icon} alt="" />
                </div>

                <div className="flex items-center gap-5">
                    <p>{time.currTime.minute}:{time.currTime.second}</p>
                    <div ref={seekBg} onClick={seekSong} className='w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer'>
                        <hr ref={seekBar} className='h-1 border-none w-0 bg-green-800 rounded-full' />
                    </div>
                    <p>{time.duration.minute}:{time.duration.second}</p>
                </div>
            </div>

            {/* ----- Third section -----  */}
            <div className="hidden lg:flex items-center gap-2 opacity-75">
                <img className='w-4' src={assets.plays_icon} alt="" />
                <img className='w-4' src={assets.mic_icon} alt="" />
                <img className='w-4' src={assets.queue_icon} alt="" />
                <img className='w-4' src={assets.speaker_icon} alt="" />
                <img className='w-4' src={assets.volume_icon} alt="" />

                <div className='w-20 flex items-center gap-2 rounded'>
                    <input
                        type="range"
                        min="0"
                        max="100"
                        value={volume * 100}
                        onChange={handleVolumeChange}
                        className="w-20 h-1 bg-slate-50 rounded-full cursor-pointer"
                    />
                </div>

                <img className='w-4' src={assets.mini_player_icon} alt="" />
                <img className='w-4' src={assets.zoom_icon} alt="" />
            </div>

        </div>
    )
}

export default Player
