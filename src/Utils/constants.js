
const apikey = process.env.REACT_APP_API_KEY;

export const YOUTUBE_VIDEO_API = 
`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${apikey}`;

export const YOUTUBE_COMMENTS_API = 
`https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet,replies&maxResults=50&key=${apikey}`;


export const YOUTUBE_SEARCH_API = 
`https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=`;

export const FETCH_VIDEOS_DETAILS = 
`https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&type=video&key=${apikey}&id=`;
