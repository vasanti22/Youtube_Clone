import React from 'react'
import { useSelector } from 'react-redux'

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);


  if(isMenuOpen) return null; // Early Return Pattern

  return (
    <div className='w-1/4'>
      <ul>
        <li>Home</li>
        <li>Shorts</li>
        <li>Video</li>
        <li>Live</li>
      </ul>
    <h1 className='font-bold'>Subscriptions</h1>
      <ul>
        <li>Home</li>
        <li>Shorts</li>
        <li>Subscriptions</li>
      </ul>

    <h1 className='font-bold'>Watch Later</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul> 
    </div>
  )
}

export default Sidebar