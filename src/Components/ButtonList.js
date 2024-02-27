import React from 'react'
//import Button from './Button'
import { useNavigate } from "react-router-dom";

const ButtonList = () => {

  const categoryList = [
    {id:0, name: 'All'},
    { id: 1, name: 'Film & Animation' },
    { id: 2, name: 'Autos & Vehicles' },
    { id: 10, name: 'Music' },
    { id: 15, name: 'Pets & Animals' },
    { id: 17, name: 'Sports' },
  // { id: 19, name: 'Travel & Events' },
    { id: 20, name: 'Gaming' },
  //  { id: 22, name: 'People & Blogs' },
    { id: 23, name: 'Comedy' },
    { id: 24, name: 'Entertainment' },
   // { id: 25, name: 'News & Politics' },
    { id: 26, name: 'Howto & Style' },
 //   { id: 27, name: 'Education' },
    { id: 28, name: 'Science & Technology' },
    { id: 29, name: 'Nonprofits & Activism' }
  ];

  const navigate = useNavigate();

  const handleButtonClick = (category) => {
    (category === 0 || category === undefined) ? (navigate(`/`)) 
    :
    navigate(`/?category=${category}`)
    
  }

  return (
    <div className='flex flex-nowrap gap-1 w-full overflow-x-scroll justify-normal'>
      {(categoryList).map((category, i) => (
        <div className='mx-1'>
          <button key={i} className='px-3 py-1 bg-slate-100 hover:bg-slate-200 rounded-md text-nowrap text-xs w-max font-semibold' onClick={() => handleButtonClick(category.id)}>{category.name}</button>
        </div>
      ))
    }
  </div>
  )
}

export default ButtonList