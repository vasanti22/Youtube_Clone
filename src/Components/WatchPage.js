import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../Utils/appSlice';
import { useSearchParams } from "react-router-dom";
import Comments from './Comments';
import { YOUTUBE_COMMENTS_API } from '../Utils/constants';

const WatchPage = () => {
	const [searchParams] = useSearchParams()
	//console.log(searchParams.get("v"));
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(closeMenu());
	}, []);

	const [comments, setComments] = useState([]);

	useEffect(() => {
		getComments();
	  }, []);
	
	  const getComments = async() => {
			const data = await fetch(YOUTUBE_COMMENTS_API + "&videoId=" + searchParams.get("v"));
			//console.log(data);
			const json = await data.json();
		//	console.log(json);
			setComments(json.items);
	  }

	return (
		<div className='px-5'>
			<iframe 
				width="976" 
				height="549" 
				src={"https://www.youtube.com/embed/" + searchParams.get("v") }
				title="" 
				FrameBorder="0" 
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
				allowFullScreen>
			</iframe>
			
			{
				comments.map((comment) => (
					<Comments key={comment.id} comments = {comment}/>
				))
			}

		</div>
		)
	}
	
	export default WatchPage