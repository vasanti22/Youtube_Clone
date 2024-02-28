import React, { useState, useEffect } from 'react';
import { FETCH_VIDEOS_BY_KEYWORD } from '../Utils/constants';
import { Link, useSearchParams } from "react-router-dom";
import SearchVideoCard from './SearchVideoCard.js';
import { useDispatch, useSelector } from "react-redux";

const SearchVideo = () => {
  const [searchResult, setSearchResult] = useState();
  let [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const q = searchParams.get("search_query");

  useEffect(() => {
    getVideos();
  }, [q]);

  const getVideos = async () => {
    const data = await fetch(FETCH_VIDEOS_BY_KEYWORD + q);
    const json = await data.json();
    setSearchResult(json.items);
  }

  return (
    <div>
      
      {searchResult &&  
        searchResult.map((video) => (
          <Link to={'/watch?v=' + video.id.videoId} key={video.id.videoId}>
           <SearchVideoCard key={video?.id?.videoId} video={video} />
          </Link>
        ))}
    </div>
    
  )
}

export default SearchVideo