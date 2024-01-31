import React from 'react'
import { toggleMenu } from '../Utils/appSlice';
import { useDispatch } from 'react-redux';

const Header = () => {
	const dispatch = useDispatch();
	const toggleMenuHandler = () => {
		dispatch(toggleMenu());
	}

  return (
    <div className='flex shadow-xl p-5'>
        <div className='w-80 flex'>
          <img 
		  	onClick={()=>toggleMenuHandler()}
            className='h-10 cursor-pointer' 
            alt='menu' 
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png' 
          /> 
          
          <img 
            className='h-10' 
            alt='Logo' 
            src='https://t3.ftcdn.net/jpg/03/00/38/90/360_F_300389025_b5hgHpjDprTySl8loTqJRMipySb1rO0I.jpg' 
            />
        </div>
        <div className='w-1/2'>
          <input 
		  	className='w-3/4 p-2 border border-gray-500 rounded-l-full'
            type='text' 
            placeholder='Search' />
          <button
		  	className='p-2 border border-gray-500 rounded-r-full'
		  >Search</button>
        </div>
		<div>
			user icon
		</div>
    </div>
  )
}

export default Header