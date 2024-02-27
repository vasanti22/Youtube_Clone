import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'; 
import { FaHome, FaVideo, FaHistory } from 'react-icons/fa'; 
import { MdSubscriptions, MdWatchLater } from "react-icons/md";
import { SiYoutubeshorts, SiYoutubemusic, SiYoutubegaming } from "react-icons/si";
import { BsFire } from "react-icons/bs";
import { BiSolidUserRectangle, BiSolidVideos } from "react-icons/bi";
import { PiDownloadSimpleBold } from "react-icons/pi";

const Sidebar = () => {
	const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
	
	if(isMenuOpen) return null; // Early Return Pattern
	
	return (
		<div className='w-2/12 p-5'>
			<div className='border-b py-4 flex flex-col gap-4'>
				<div className='flex gap-2 items-center'>
					<Link to="/" className='flex gap-2 items-center'><FaHome/>Home</Link>
				</div>
				<div className='flex gap-2 items-center'><SiYoutubeshorts/>Shorts</div>
				<div className='flex gap-2 items-center'><MdSubscriptions/>Subscriptions</div>
			</div>
			<div className='border-b py-4 flex flex-col gap-4'>
				<div className='flex gap-2 items-center'><BiSolidUserRectangle />Your channel</div>
				<div className='flex gap-2 items-center'><FaHistory/>History</div>
				<div className='flex gap-2 items-center'><BiSolidVideos/>Your Video</div>
				<div className='flex gap-2 items-center'><MdWatchLater/>Watch Later</div>
			</div>
			<div className='border-b py-4 flex flex-col gap-4'>
				<div className='flex gap-2 items-center'><BsFire/>Trending</div> 
				<div className='flex gap-2 items-center'><FaVideo/>Movies</div>
				<div className='flex gap-2 items-center'><SiYoutubegaming />Gaming</div>
				<div className='flex gap-2 items-center'><SiYoutubemusic/>Youtube Music</div>
				<div className='flex gap-2 items-center'><PiDownloadSimpleBold />Downloads</div>
			</div> 
		</div>
		)
	}
	
	export default Sidebar