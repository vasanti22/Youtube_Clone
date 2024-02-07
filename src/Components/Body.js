import React from 'react'
//import MainContainer from './MainContainer';
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom';

const Body = () => {
  return (
    <div className='relative flex my-4 top-20'>
        <Sidebar/>
        <Outlet/>
    </div>
  )
}

export default Body