import React from 'react'
import MainContainer from './MainContainer';
import Sidebar from './Sidebar'

const Body = () => {
  return (
    <div className='flex my-4'>
        <Sidebar/>
        <MainContainer />
    </div>
  )
}

export default Body