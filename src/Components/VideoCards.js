import React from 'react'

const VideoCards = ({ info }) => {
   // console.log(info);
    const { snippet, statistics } = info;
    const { channelTitle, title, thumbnails } = snippet;
    
    return (
        <div className='w-72  m-2 shadow-lg'>
            <img className='rounded-lg' alt="Thumbnail" src={thumbnails.medium.url}/>
            <div className='p-3'>
                <h1 className='font-bold'>{title}</h1>
                <h3>{channelTitle}</h3>
                <p>{statistics.viewCount} views</p> 
            </div>
        </div>
        );
    };
    
    export default VideoCards