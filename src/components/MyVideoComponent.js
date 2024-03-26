import { useState } from 'react';

import VideoModal from '../components/VideoModal'
import LoadingButton from '../components/LoadingButton'

const MyVideoComponent = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
  
    const handleClick = () => {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setIsOpen(true);
      }, 2000); // Simulate a 2-second loading delay
    };
  
    return (
      <div>
        <LoadingButton isLoading={isLoading} onClick={handleClick}>
          Watch Video
        </LoadingButton>
        <VideoModal isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    );
  };
  export default MyVideoComponent
  