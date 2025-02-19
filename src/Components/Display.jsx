import React, {useEffect, useRef} from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import DisplayHome from './DisplayHome'
import DisplayAlbum from './DisplayAlbum'
import { albumsData } from '../assets/assets'
// import DisplayAlbum from './DisplayAlbum'

const Display = () => {

  const displayRef = useRef();
  const location = useLocation();
  // console.log(location);     // *object
  const isAlbum = location.pathname.includes("album");
  // console.log(isAlbum);
  const albumId = isAlbum ? location.pathname.slice(-1) : "";          // current album id

  const bgColor = albumsData[Number(albumId)].bgColor;                 // get the background color of current album from 'albumsData'

  useEffect(() => {
    // check if we are on album page
    if(isAlbum) {
      displayRef.current.style.background = `linear-gradient(${bgColor},#121212)`
    }
    else {
      displayRef.current.style.background = `#121212)`
    }
  })

  return (
    <div ref={displayRef} className='w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0'>
        <Routes>
            <Route path='/' element={<DisplayHome/>} />
            {/* <Route path='/album/:id' element={<DisplayAlbum/>}/> */}
            <Route path='/album/:id' element={<DisplayAlbum/>}/>
        </Routes>
    </div>
  )
}

export default Display