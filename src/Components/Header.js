import React, { useEffect, useState } from 'react'
import { showSuggession, toggleMenu } from '../Utils/appSlice';
import { useDispatch, useSelector } from 'react-redux';
import { YOUTUBE_SEARCH_API } from '../Utils/constants';
import { FaSearch, FaWindowClose } from 'react-icons/fa';
//import { Link } from 'react-router-dom';

const Header = () => {
	const dispatch = useDispatch();
	const toggleMenuHandler = () => {
		dispatch(toggleMenu());
	}
  const isSuggestionBox = useSelector((store) => store.app.isSuggestionBox);

  useEffect(() => {
		dispatch(showSuggession());
	}, []);

  const showSuggessionHandler = () => {
		dispatch(showSuggession());
	}

  const [searchText, setSearchText] = useState("");
  
  useEffect(() => {
    const timer = setTimeout(() => getSearchData(), 3000);

    return() => {
      clearTimeout(timer);
    } 

  }, [searchText])

  const getSearchData = async () => {
    console.log("API CALL ==>"+searchText);
    const data = await fetch(YOUTUBE_SEARCH_API + searchText);
    const json = await data.json;
  }

  const onClear = () => {
    setSearchText("");
  };

  

  return (
    <div className='flex shadow-xl p-5'>
        <div className='w-80 flex'>
          <img 
		  	    onClick={()=>toggleMenuHandler()}
            className='h-10 cursor-pointer' 
            alt='menu' 
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png' 
          /> 
          
         <a href="/">
          <img 
            className='h-10' 
            alt='Logo' 
            src='https://t3.ftcdn.net/jpg/03/00/38/90/360_F_300389025_b5hgHpjDprTySl8loTqJRMipySb1rO0I.jpg' 
            /> 
            </a>
          
        </div>
        <div className='w-1/2 relative'>
          <input 
		  	    className='w-3/4 p-2 border border-gray-500 rounded-l-full'
            type='text' 
            placeholder='Search' 
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            
          />
          <button className='m-2 absolute insert-0 top-1 right-1/4' onClick={onClear}><FaWindowClose /></button>
          <button className='p-3 border border-gray-500 rounded-r-full' onClick={showSuggessionHandler}><FaSearch /></button>
        {
        !isSuggestionBox? "" :  
          
        <div className='absolute bg-white w-3/4 rounded-lg shadow-lg my-2 border-solid border border-gray-400'>
          <ul>
            <li className='p-1 hover:bg-gray-200'>Text</li>
            <li className='p-1 hover:bg-gray-200'>Text</li>
            <li className='p-1 hover:bg-gray-200'>Text</li>
            <li className='p-1 hover:bg-gray-200'>Text</li>
            <li className='p-1 hover:bg-gray-200'>Text</li>
          </ul>
        </div>
      }
        </div>
        
		<div>
			user icon
		</div>
    </div>
  )
}

export default Header