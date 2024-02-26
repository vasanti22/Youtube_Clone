import React from 'react'

const Comments = ({ comments }) => {
   // console.log(comments);
   const { totalReplyCount } = comments.snippet;
  const{ snippet}  = comments.snippet.topLevelComment;
  const { authorDisplayName, textDisplay, authorProfileImageUrl } = snippet;
  


  return (
    <div className='py-2'>
        <div className='flex'>
          <img className='mr-4 inline-block rounded-full' alt="user" src={authorProfileImageUrl}/>
          <ul>
            <li className='font-bold'>{authorDisplayName}</li>
            <li>{textDisplay}</li>
            {
              (totalReplyCount) > 0 ? (<ul className='ml-6'>
                <li>REPLY</li>
              </ul>) : ""
            }
             
           </ul> 
        </div>
    
    </div>
  )
}

export default Comments