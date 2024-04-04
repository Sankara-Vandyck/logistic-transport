import React, { useRef, useState } from 'react';

const SecondVideo = ({ src, isOpen, onClose }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-4 rounded-lg relative">
            <button
              className="absolute top-0 right-0 m-2 transform -translate-x-1/2 -translate-y-1/2 px-4 py-2  bg-gray-900 text-white hover:text-gray-100 focus:outline-none rounded-md animate-bounce"
              onClick={onClose}
            >
              Close
            </button>
            <div className="w-96 h-72 mx-auto">
              <video
                ref={videoRef}
                src={src}
                className={`w-full h-full ${isPlaying ? 'block' : 'hidden'}`}
                controls
              >
                Your browser does not support the video tag.
              </video>
              {!isPlaying && (
                <button
                  className="flex justify-center transform -translate-x-1/2 -translate-y-1/2 bg-gray-900 text-white px-4 py-2 rounded-md animate-bounce"
                  onClick={togglePlay}
                >
                  Play
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SecondVideo;
