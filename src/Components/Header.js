import React, { useEffect, useState } from 'react'
import { toggleMenu } from '../Utils/appSlice';
import { useDispatch, useSelector } from 'react-redux';
import { YOUTUBE_SEARCH_API } from '../Utils/constants';
import { FaSearch, FaWindowClose, FaBell, FaUserCircle, FaYoutube } from 'react-icons/fa';
import { cacheResults } from '../Utils/searchSlice';
import { useNavigate } from "react-router-dom";


const Header = () => {
	const dispatch = useDispatch();
	const toggleMenuHandler = () => {
		dispatch(toggleMenu());
	}
  
  const [searchText, setSearchText] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);
  const navigate = useNavigate();
  
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
   //console.log("hi");
    setSearchText(suggestion);
    setShowSuggestions(false);
    setSuggestions([]); 
    handleFormSubmit(suggestion);
  }

  const handleFormSubmit = (suggestion) => {
  //console.log("submit" + suggestion);
    navigate("/results?search_query=" + suggestion);
    setSearchText("");
  }

  const onClear = () => {
   setSearchText("");
   setShowSuggestions(true);
    //navigate("/");
  }

  return (
    <div className='fixed top-0 z-10 bg-white w-full flex shadow-xl p-5 ro '>
        <div className='w-3/12 flex items-center'>
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
        <div className='w-6/12 relative text-center'>
        
          <input 
		  	    className='w-3/4 p-2  border border-gray-500 rounded-l-full'
            type='text' 
            placeholder='Search' 
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onFocus={()=> setShowSuggestions(true)}
            //onBlur={()=>setShowSuggestions(false)}
            
          />
          <button className='m-2 absolute insert-0 right-28 top-1' onClick={onClear}><FaWindowClose /></button>
          <button className='p-3 border border-gray-500 rounded-r-full'><FaSearch /></button>

          { showSuggestions && ( 
            <div className='absolute top-10 left-2/4 -translate-x-2/4 bg-white rounded-lg shadow-2xl my-2 w-3/4 text-center'>
              <ul>
              {
                suggestions && suggestions.map((suggestion, i) =>  {  
                return(<li className='flex px-2 align-middle hover:bg-gray-200' key={i} onClick={() => handleSearchText(suggestion)} >
                          {suggestion}
                        </li>
                      ) 
                })
              } 
              </ul>
            </div>
          )}  
          
        </div>
        
		<div className='w-3/12 flex'>
    <div className='flex ml-auto text-3xl align-middle gap-3 items-center'>
      <FaYoutube className='cursor-pointer'/>
      <FaBell className='cursor-pointer'/>
      <FaUserCircle className='cursor-pointer'/>
    </div>
      
		</div>
    </div>
  )
}

export default Header