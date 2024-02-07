
const GOOGLE_API_KEY = "AIzaSyBprvqaN1MgJOqXvJVKxbIo61H7BJZtEtk";

export const YOUTUBE_VIDEO_API = 
"https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="+
GOOGLE_API_KEY;

export const YOUTUBE_COMMENTS_API = 
"https://youtube.googleapis.com/youtube/v3/comments?part=snippet&parentId=UgzDE2tasfmrYLyNkGt4AaABAg&key="+GOOGLE_API_KEY;


export const YOUTUBE_SEARCH_API = 
"https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="
