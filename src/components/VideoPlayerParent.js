import React, {useState}  from 'react';
import VideoPlayer from '../components/VideoPlayer'; 
import PlayIcon from '../utils/PlayIcon';
import BlinkingCircles from '../utils/BlinkingCircles'

const VideoPlayerParent = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };

 return (
    <div className="flex justify-center relative top-[-370px]">
   <button
      className="bg-blue-500 text-white p-4 rounded-full hover:bg-blue-600 focus:outline-none flex items-center justify-center relative"
      onClick={openModal}
    >
      <BlinkingCircles />
      <PlayIcon className="w-6 h-6" />
    </button>
    <VideoPlayer className='w-80 h-96'
      src={require('../assets/videos/myVideo.mp4')}
      isOpen={isModalOpen}
      onClose={closeModal}
    />
  </div>

 );
};

export default VideoPlayerParent;
