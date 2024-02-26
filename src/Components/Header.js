import React, { useEffect, useState } from 'react'
import { toggleMenu } from '../Utils/appSlice';
import { useDispatch, useSelector } from 'react-redux';
import { YOUTUBE_SEARCH_API } from '../Utils/constants';
import { FaSearch, FaWindowClose } from 'react-icons/fa';
import { cacheResults } from '../Utils/searchSlice';


//import { Link } from 'react-router-dom';

const Header = () => {
	const dispatch = useDispatch();
	const toggleMenuHandler = () => {
		dispatch(toggleMenu());
	}
  
  const [searchText, setSearchText] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);
   

  useEffect(() => {
    const timer = setTimeout(() => {
      
      if (searchCache[searchText]){
        setSuggestions(searchCache[searchText]); 
      }
      else {
        getSearchData();
      }
     
    }, 200);

    return() => {
      clearTimeout(timer);
    } 

  }, [searchText]);

  const getSearchData = async () => {
   // console.log("API CALL ==>"+searchText);
    const data = await fetch(YOUTUBE_SEARCH_API + searchText);
    const json = await data.json();
    //console.log(json);
    setSuggestions(json[1]); 

    dispatch(cacheResults({
      [searchText]:json[1],
    }));
  }

  const handleSearchText = (suggestion) => {
    console.log("hi");
    searchText(suggestion);
    setSuggestions([]);
    
  }

  const onClear = () => {
    setSearchText("");
  }

  return (
    <div className='fixed top-0 z-10 bg-white w-full flex shadow-xl p-5 ro '>
        <div className='w-80 flex items-center'>
          <img 
		  	    onClick={()=>toggleMenuHandler()}
            className='h-8 cursor-pointer align-middle' 
            alt='menu' 
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png' 
          /> 
          
         <a href="/">
          <img 
            className='h-12' 
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
            onFocus={()=> setShowSuggestions(true)}
            onBlur={()=>setShowSuggestions(false)}
            
          />
          <button className='m-2 absolute insert-0 top-1 right-1/4' onClick={onClear}><FaWindowClose /></button>
          <button className='p-3 border border-gray-500 rounded-r-full'><FaSearch /></button>
          
        </div>
        { showSuggestions && ( 
          <div className='fixed top-16 left-1/4 bg-white w-1/4 rounded-lg shadow-lg my-2'>
            <ul>
            {
              suggestions.map((suggestion) => (
              <li className='flex px-2 align-middle hover:bg-gray-200' 
                  key={suggestion} 
                  onClick={() => handleSearchText(suggestion)} >
                {suggestion}
              </li>
              ))
            } 
            </ul>
          </div>
        )}  
		<div>
           
			user icon
		</div>
    </div>
  )
}

export default Header