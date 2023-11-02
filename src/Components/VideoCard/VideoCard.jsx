// 
import React, { useRef, useState } from 'react';
import './VideoCard.css';

import videoSource from '../../Assets/ProductVideo.mp4';

const VideoCard = () => {
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
    <div className='videocard'>
      <div className="video-container">
        <video
          ref={videoRef}
          width='100%'
          height='363'
          controls={false} 
        >
          <source src={videoSource} type='video/mp4' />
          Your browser does not support the video tag.
        </video>
        <button id='playbutton' className={`play-button ${isPlaying ? 'playing' : ''}`} onClick={togglePlay}></button>
      </div>
    </div>
  );
};

export default VideoCard;
