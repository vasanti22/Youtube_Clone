export const formatCount = (views) => {
    if (views >= 1000000) {
      // Convert to millions with one decimal place
      return (views / 1000000).toFixed(1) + 'M';
    } else if (views >= 1000) {
      // Convert to thousands
      return Math.floor(views / 1000) + 'K';
    } else {
      // Use the original number if less than 1000
      return views;
    }
  };


  export const formatTimeAgo = (isoTimestamp) => {
    const currentTime = new Date();
    const timestamp = new Date(isoTimestamp);
    const timeDifference = currentTime - timestamp;
  
    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);
  
    if (years > 0) {
      return `${years} year${years > 1 ? 's' : ''} ago`;
    } else if (months > 0) {
      return `${months} month${months > 1 ? 's' : ''} ago`;
    } else if (weeks > 0) {
      return `${weeks} week${weeks > 1 ? 's' : ''} ago`;
    } else if (days > 0) {
      return `${days} day${days > 1 ? 's' : ''} ago`;
    } else if (hours > 0) {
      return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else if (minutes > 0) {
      return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    } else {
      return `${seconds} second${seconds > 1 ? 's' : ''} ago`;
    }
  };