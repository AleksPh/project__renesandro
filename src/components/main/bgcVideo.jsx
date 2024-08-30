import { useRef, useEffect } from 'react';
import videoSrc from '../../images/video/bgc.mp4'

const BackgroundVideo = ({ playbackRate = 1 }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = playbackRate;
    }
  }, [playbackRate]);

  return (
    <div className="video-background">
      <video ref={videoRef} autoPlay muted loop className="video">
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default BackgroundVideo;