import React from 'react'
import {albumsData, songsData} from '../assets/assets'
import AlbumItem from './AlbumItem'
import Navbar from './Navbar'
import SongItem from './SongItem'

const DisplayHome = () => {
    return (
        <>
        <Navbar/>
            <div className='mb-4'>
                <h1 className='my-5 text-2xl font-bold'>Featured Albums</h1>
                <div className="flex overflow-auto">
                    {albumsData.map((item, idx) => (<AlbumItem key={idx} id={item.id} name={item.name} desc={item.desc} image={item.image}/>))}
                </div>
            </div>
            <div className='mb-4'>
                <h1 className='my-5 text-2xl font-bold'>Latest Hits</h1>
                <div className="flex overflow-auto">
                    {songsData.map((item,idx) => (<SongItem key={idx} id={item.id} name={item.name} image={item.image} desc={item.desc}/>))}
                </div>
            </div>
        </>
    )
}

export default DisplayHome
