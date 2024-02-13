import React from 'react'
import { formatCount, formatTimeAgo } from '../Utils/helper';

const VideoDetails = ({ info }) => {

   const { snippet, statistics } = info ?? {} ;
   const { title, description, publishedAt, channelTitle } = snippet ?? {};
   const { viewCount } = statistics ?? {}
 
  return (
    <div>
        <div className='font-bold text-2xl py-4'>{title}</div> 
        <div>
            <p>{channelTitle}</p>
            <div className='rounded-lg bg-gray-200 p-2'>
                <span className='inline-block font-bold'>{formatCount(viewCount)} views</span> 
                <span className='pl-2 inline-block font-bold'>{formatTimeAgo(publishedAt)}</span>
                <p>{description}</p>
                
            </div>
        </div>
    </div>
  )
}

export default VideoDetails;