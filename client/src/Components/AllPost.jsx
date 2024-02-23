import { useEffect } from 'react';
import './allPost.css'
import SocialBtn from './SocialBtn'
import AOS from 'aos';
import 'aos/dist/aos.css';

const AllPost = (props) => {
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
    <div className='popular-content'>
         <img src={props.src} alt=""/>
        <div className='popular-hover'>
          <div></div>
          <div className='popular-title' data-aos="fade-up">
           <h1>{props.title}</h1>
            <SocialBtn link={props.link} postId={props.postId} postLink={props.postLink} />
          </div>
           
        </div>
    </div>
  )
}

export default AllPost;