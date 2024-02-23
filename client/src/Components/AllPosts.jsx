import './allPosts.css';
import AllPost from './AllPost'
import { ArrowRight } from '@mui/icons-material'
import { Post } from '../data'
import { useEffect, useState } from 'react';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';
import GeneralSkeleton from './GeneralSkeleton';

const AllPosts = () => {
  const[content,setContent] = useState([]);
  const[isLoading,setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('https://blog-newsapi.onrender.com/news');
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
    <div className='popular-container'  id='all'>
    <h1 data-aos="fade-up">All Articles</h1>
    <div className='pop-wrapper'>
    <p data-aos="fade-right">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    <span data-aos="fade-left">View All <ArrowRight/></span>
    </div>
    <div className='allPost-container' data-aos="fade-up" >
      {isLoading && <GeneralSkeleton counts={6}/>}
        {
            content.map((item)=>(
                <AllPost key={item.id} title={item.title} src={item.urlToImage} link={item.url} postId={item.id} postLink={item.url}/>
            ))
        }
    </div>
    </div>
  )
}

export default AllPosts