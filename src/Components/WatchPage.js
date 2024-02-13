import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../Utils/appSlice';
import { useSearchParams } from "react-router-dom";
import Comments from './Comments';
import { YOUTUBE_COMMENTS_API, FETCH_VIDEOS_DETAILS } from '../Utils/constants';
import VideoDetails from './VideoDetails';
import WatchPageSidebar from './WatchPageSidebar';


const WatchPage = () => {
	const [searchParams] = useSearchParams()
	const videoId = (searchParams.get("v"));
	//console.log("ID = " + videoId);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(closeMenu());
	}, []);
	
	const [comments, setComments] = useState([]);
	const [videoDetails, setVideoDetails] = useState({});
	
	useEffect(() => {
		getComments();
		getVideoDetails();
	}, [videoId]);
	
	const getComments = async() => {
		const data = await fetch(YOUTUBE_COMMENTS_API + "&videoId=" + videoId);
		const json = await data.json();
		setComments(json.items);
	}
	
	const getVideoDetails = async() => {
		const videoData = await fetch (FETCH_VIDEOS_DETAILS + videoId)
		//console.log(videoData);
		const videoJson = await videoData.json();
		setVideoDetails(videoJson.items[0]);
		//console.log(videoJson.items[0]);
	}
	
	return (
		<div className='w-full flex'>
			<div className='mx-5 w-9/12'>
				<iframe 
				width="976" 
				height="549" 
				src={"https://www.youtube.com/embed/" + searchParams.get("v") }
				title="" 
				FrameBorder="0" 
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
				allowFullScreen>
				</iframe>
			
				<VideoDetails info={videoDetails} />
			
				<div>
					{
						comments.map((comment) => (
							<Comments key={comment.id} comments = {comment}/>
						))
					}
				</div>
			</div>
			<WatchPageSidebar />
		</div>
			
	)
}
		
		export default WatchPage