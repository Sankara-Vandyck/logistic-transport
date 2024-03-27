import React, {useState} from 'react'
import myVideo from '../assets/videos/myVideo.mp4'

const VideoModal = () => {

  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = React.useRef(null)

  const togglePlay = () =>{
    if(isPlaying){
      videoRef.current.pause();
    }else{
      videoRef.current.play()
  }
    setIsPlaying(!isPlaying)
  }

  return (
   <div>
     <video ref={videoRef} src={myVideo} controls={false} />
      <button onClick={togglePlay}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
   </div>
  )
}
export default VideoModal;
  