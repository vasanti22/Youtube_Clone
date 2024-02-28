import React, { useEffect, useState } from 'react';
import { YOUTUBE_VIDEO_API, FETCH_POPULAR_VIDEOS_BY_CATEGORY_ID } from '../Utils/constants';
import VideoCards from './VideoCards';
import { Link, useSearchParams } from 'react-router-dom';

const VideoContainer = () => {
  const[videos, setVideos] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("category");
  
  useEffect(() => {
    getVideos();
  }, [category]);
  
  const getVideos = async () => {
    const data = await fetch (category? FETCH_POPULAR_VIDEOS_BY_CATEGORY_ID + category : YOUTUBE_VIDEO_API);
    const json = await data.json();
   // console.log(json.items[0]);
    setVideos(json.items);
    
  }
  
  return (
    <div className='flex flex-wrap justify-items-center'>
    {videos.map((video) => (
      <Link to={"/watch?v="+video.id} className='w-1/3' > 
        <VideoCards key={video.id} info = {video} />
      </Link> 
    ))
    }
    </div>
    )
  }
  
  export default VideoContainer