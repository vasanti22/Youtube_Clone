import React, { useEffect } from 'react'

const Comments = ({ comments }) => {
   // console.log(comments);
  const{ snippet }  = comments;
  const { authorDisplayName, textDisplay, authorProfileImageUrl } = snippet;


  return (
    <div className='py-2'>
        <div className='flex'>
          <img className='pr-4' alt="userimg" src={authorProfileImageUrl}/>
          <ul>
            <li className='font-bold'>{authorDisplayName}</li>
            <li>{textDisplay}</li>
           </ul> 
        </div>
    
    </div>
  )
}

export default Comments