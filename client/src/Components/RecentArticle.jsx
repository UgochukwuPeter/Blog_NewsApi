import { ArrowRight } from '@mui/icons-material';
import Recent from './Recent';
import './popular-container.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';
import GeneralSkeleton from './GeneralSkeleton';

const RecentArticle = () => {
  const[content,setContent] = useState([]);
  const[isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/recent');
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
    <div className='popular-container' id='entertainment'>
     <h1 data-aos="fade-up">Entertainment</h1>
    <div className='pop-wrapper'>
    <p data-aos="fade-right">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    <span data-aos="fade-left">View All <ArrowRight/></span>
    </div>
    <div className='popular-container-wrapper' data-aos="fade-up">
      {isLoading  && <GeneralSkeleton cards={3}/>}
      {
        content.map((post)=>(
          <Recent key={post.id} title={post.title} src={post.urlToImage} link={post.url} postId={post.id} postLink={post.url}/>
        ))
      }
    </div>
   
    
    </div>
  )
}

export default RecentArticle