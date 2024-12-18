import React, { useContext } from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import { albumsData, assets, songsData } from '../assets/assets'

const DisplayAlbum = () => {

    const { id } = useParams();
    const currAlbum = albumsData[id];
    return (
        <>
            <Navbar />

            <div className="flex flex-col gap-8 mt-10 md:flex-row md:items-end">

                <img src={currAlbum.image} alt="" />

                <div className="flex flex-col">
                    <p>Playlist</p>
                    <h2 className='text-5xl font-bold mb-4 md:text-7xl'>{currAlbum.name}</h2>
                    <h4>{currAlbum.desc}</h4>
                    <p className='mt-1'>
                        <img className='inline-block w-5' src={assets.spotify_logo} alt="" />
                        <b>Spotify</b>
                        - 1,334,644 likes
                        - <b>50 songs,</b>
                        about 2 hr 30 min
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 text-[#a7a7a7]">
                <p><b className='my-4'>#</b>Title</p>
                <p>Album</p>
                <p className='hidden sm:block'>Date Added</p>
                <img className='w-4 m-auto' src={assets.clock_icon} alt="" />
            </div>
            <hr />

            
            {songsData.map((item,idx) => (<div key={idx} className='grid grid-cols-3 sm:grid-cols-4 p-2 gap-2 items-center cursor-pointer text-[#a7a7a7]'>
                <p className="text-white">
                        <b className='mr-4 text-[#a7a7a7]'>{idx + 1}</b>
                        <img className='inline w-10 mr-5' src={item.image} alt="" />
                        {item.name}
                    </p>
                    <p className='text-[15px]'>{currAlbum.name}</p>
                    <p className='text-[15px] hidden sm:block'>5 days ago</p>
                    <p className='text-[15px] text-center'>{item.duration}</p>
            </div>))}
        </>
    )
}

export default DisplayAlbum
