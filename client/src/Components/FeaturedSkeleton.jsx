import './featuredSkeleton.css';
import Skeleton from '@mui/material/Skeleton';

const FeaturedSkeleton = () => {
  return (
    <div className='card-skeleton-featured'>
        <div className="card-left-featured">
        <Skeleton variant='rectangle' sx={{height:'20rem'}}/>
        </div>
        <div className="card-right-featured">
            <Skeleton variant='rounded' sx={{height:'1.5rem', width:'30%'}}/>
            <Skeleton variant="text" sx={{ height:'2.5rem' }}/>
            <Skeleton variant="text" sx={{ height:'2.5rem' }}/>
            <Skeleton variant="rectangle" height={30}/>
        </div>
    </div>
  )
}

export default FeaturedSkeleton