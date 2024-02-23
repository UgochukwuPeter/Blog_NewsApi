import Skeleton from '@mui/material/Skeleton';
import './general-skeleton.css';

const GeneralSkeleton = ({cards}) => {
  return (
    Array(cards).fill(0).map((_,i)=>(
        <div className='general-skeleton' key={i}>
        <Skeleton variant='rounded' sx={{height:'25rem'}}/>
    </div>
    ))
  )
}

export default GeneralSkeleton