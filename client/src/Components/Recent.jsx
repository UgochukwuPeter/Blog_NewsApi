import React from 'react'
import SocialBtn from './SocialBtn';

const Recent = (props) => {
  return (
    <div className='popular'>
         <img src={props.src} alt="" />
        <div className='popular-hover'>
          <div></div>
          <div className='popular-title'>
           <h1>{props.title}</h1>
           <SocialBtn link={props.link} postId={props.postId} postLink={props.postLink}/>
          </div>
           
        </div>
    </div>
  )
}

export default Recent