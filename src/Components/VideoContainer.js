import React, { useEffect, useState } from 'react';
import { YOUTUBE_VIDEO_API } from '../Utils/constants';
import VideoCards from './VideoCards';

const VideoContainer = () => {
  const[videos, setVideos] = useState([]);
  
  useEffect(() => {
    getVideos();
  }, []);
  
  const getVideos = async () => {
    const data = await fetch (YOUTUBE_VIDEO_API);
    const json = await data.json();
   // console.log(json);
    setVideos(json.items);
    
  }
  
  return (
    <div className='flex flex-wrap justify-items-center'>
    {videos.map((video) => (
      <VideoCards key={video.id} info = {video} />
    ))
    }
    </div>
    )
  }
  
  export default VideoContainer