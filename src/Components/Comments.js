import React, { useEffect } from 'react'

const Comments = ({ comments }) => {
   // console.log(comments);
  const{ snippet }  = comments;
  const { authorDisplayName, textDisplay } = snippet;


  return (
    <div className='py-2'>
        <ul>
            <li className='font-bold'>{authorDisplayName}</li>
            <li>{textDisplay}</li>
        </ul>
    
    </div>
  )
}

export default Comments