import { ShareOutlined, ThumbUpOutlined } from '@mui/icons-material';
import './socialbtn.css';
import { useEffect, useState } from 'react';

const SocialBtn = (props) => {
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    // Load likes from local storage on component mount
    const savedLikes = localStorage.getItem(`likes_${props.postId}`);
    if (savedLikes) {
      setLikes(parseInt(savedLikes));
    }
  }, [props.postId]);

  const incrementLikes = () => {
    const newLikes = likes + 1;
    setLikes(newLikes);
    // Save likes to local storage
    localStorage.setItem(`likes_${props.postId}`, newLikes);
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(props.postLink);
      alert('Link copied to clipboard!');
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };
  return (
    <div className='social-btn'>
        <a href={props.link} className='read-more' target='_blank'>Read More</a>
        <div className='social-icons'>
        <span>{likes} Likes</span>
          <button onClick={incrementLikes}>
            <ThumbUpOutlined/>
          </button>
          <button onClick={copyToClipboard}>
          <ShareOutlined/>
          </button>
            
        </div>
    </div>
  )
}

export default SocialBtn