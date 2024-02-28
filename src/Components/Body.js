import React from 'react'
//import MainContainer from './MainContainer';
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom';
import Header from './Header';

const Body = () => {
  return (
    <div className='relative flex my-4 top-20'>
        <Header />
        <Sidebar/>
        <Outlet/>
    </div>
  )
}

export default Body