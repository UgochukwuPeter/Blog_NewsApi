import './popular.css';
import FeaturedBtn from './FeaturedBtn';
import SocialBtn  from './SocialBtn';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Popular = (props) => {
  const[content,setContent] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/popular');
        setContent(response.data);
      } catch (error) {
        console.log('Error fetching posts', error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div className='popular'>
        <img src={props.src} alt="" />
        <div className='popular-hover'>
          <FeaturedBtn/>
          <div className='popular-title'>
          <h1>{props.title}</h1>
          <SocialBtn link={props.link} postLink={props.postLink} postId={props.postId}/>
         
         
          </div>
           
        </div>
    </div>
  )
}

export default Popular