import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'

const MainContainer = () => {
  return (
    <div className='p-5 w-10/12'>
      <div className='my-2'><ButtonList/></div>
        
      <VideoContainer/>
    </div>
  )
}

export default MainContainer