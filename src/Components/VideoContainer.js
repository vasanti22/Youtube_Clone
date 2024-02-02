import React, { useEffect, useState } from 'react';
import { YOUTUBE_VIDEO_API } from '../Utils/constants';
import VideoCards from './VideoCards';
import { Link } from 'react-router-dom';

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
      <Link to={"/watch?v="+video.id} > 
        <VideoCards key={video.id} info = {video} />
      </Link> 
    ))
    }
    </div>
    )
  }
  
  export default VideoContainer