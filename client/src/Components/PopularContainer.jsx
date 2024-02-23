import './popular-container.css';
import Popular from './Popular'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import { ArrowRight } from '@mui/icons-material';
import axios from 'axios';
import GeneralSkeleton from './GeneralSkeleton';

const PopularContainer = () => {
  const[content,setContent] = useState([]);
  const[isLoading, setIsLoading] =  useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('https://blog-newsapi.onrender.com/popular');
        setContent(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log('Error fetching posts', error);
      }
    };
    fetchPosts();
  }, []);

  useEffect(() => {
    AOS.init({
      disable: false, 
      startEvent: 'DOMContentLoaded', 
      initClassName: 'aos-init', 
      animatedClassName: 'aos-animate', 
      useClassNames: false, 
      disableMutationObserver: false,
      debounceDelay: 50, 
      throttleDelay: 99,
      offset: 120, 
      delay: 0, 
      duration: 400, 
      easing: 'ease', 
      once: false, 
      mirror: false, 
      anchorPlacement: 'top-bottom', 

      // more settings here
    });
  }, []);
  return (
    <div className='popular-container' id='sports'>
    <h1 data-aos="fade-up">Sports Articles</h1>
    <div className='pop-wrapper'>
    <p data-aos="fade-up">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias vero minima consequuntur, recusandae dolorum harum!</p>
    <span data-aos="fade-up">View All <ArrowRight/></span>
    </div>
   
    <div data-aos="fade-up" className='popular-container-wrapper'>
    {isLoading &&  <GeneralSkeleton cards={2}/>}
      {
        content.map((post)=>(
          <Popular key={post.id} src={post.urlToImage} title={post.title} link={post.url} postId={post.id} postLink={post.url} />
        ))
      }
    </div>
   
    </div>
  )
}

export default PopularContainer