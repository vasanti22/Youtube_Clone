import React from 'react'
import { formatCount, formatTimeAgo } from '../Utils/helper';

const VideoCards = ({ info }) => {
   // console.log(info);
    const { snippet, statistics } = info;
    const { channelTitle, title, thumbnails, publishedAt } = snippet;
    
    return (
        <div className='w-80  m-2 shadow-lg'>
            <img className='rounded-lg' alt="Thumbnail" src={thumbnails.medium.url}/>
            <div className='p-3'>
                <h1 className='font-bold h-12 text-ellipsis overflow-hidden'>{title}</h1>
                <h3>{channelTitle}</h3>
                <p className='inline-block pr-2'>{formatCount(statistics.viewCount)} views</p> 
                <p className='inline-block pl-2 border-l-2 border-gray-500'>{formatTimeAgo(publishedAt)} </p> 
            </div>
        </div>
        );
    };
    
    export default VideoCards