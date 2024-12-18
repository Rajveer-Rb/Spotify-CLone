import React from 'react'
import { assets } from '../assets/assets'

const Sidebar = () => {
    return (
        <div className='h-full w-1/4 flex-col gap-2 p-2 hidden lg:flex text-white'>

            <div className="top h-[15%] rounded bg-[#121212] flex flex-col justify-around">
                <div className="Home flex  items-center gap-3 pl-8 h-1/2 cursor-pointer">
                    <img className='w-6' src={assets.home_icon} alt="" />
                    <p className='font-bold'>Home</p>
                    <button type=''></button>
                </div>
                <div className="Search flex  items-center gap-3 pl-8 h-1/2 cursor-pointer">
                    <img className='w-6' src={assets.search_icon} alt="" />
                    <p className='font-bold'>Search</p>
                    <button type=''></button>
                </div>
            </div>

            <div className="bottom h-[85%] rounded bg-[#121212]">

                <div className="library flex items-center justify-between  p-4">
                    <div className="left flex items-center gap-3">
                        <img className='w-9' src={assets.stack_icon} alt="" />
                        <p className='font-semibold'>Your Library</p>
                    </div>
                    <div className="right flex items-center gap-3">
                        <img className='w-5' src={assets.arrow_icon} alt="" />
                        <img className='w-5' src={assets.plus_icon} alt="" />
                    </div>
                </div>

                <div className="playList p-4 bg-[#242424] font-semibold m-2 flex flex-col items-start justify-start gap-1 pl-4 hover:bg-[#383838] rounded">
                    <h2>Create your first playlist</h2>
                    <p className='font-light'>it's easy we'll help you</p>
                    <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>Create Playlist</button>
                </div>
                <div className="playList p-4 bg-[#242424] font-semibold m-2 flex flex-col items-start justify-start gap-1 pl-4 mt-4 hover:bg-[#383838] rounded">
                    <h2>Explore global podcasts</h2>
                    <p className='font-light'>let us help you</p>
                    <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>Browse Podcasts</button>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
