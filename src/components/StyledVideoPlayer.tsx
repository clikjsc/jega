import React, { useRef, useEffect } from 'react';
import YouTube, { YouTubeProps, YouTubePlayer } from 'react-youtube';
import styles from './StyledVideoPlayer.module.css';

interface StyledVideoPlayerProps {
  youtubeId: string;
  title?: string;
  startTime?: number; 
  onPlayerReady?: (player: YouTubePlayer) => void; 
  seekRequest?: { time: number; key: number }; 
  playerId?: string; // Added playerId prop for direct DOM access if needed
}

const StyledVideoPlayer: React.FC<StyledVideoPlayerProps> = ({
  youtubeId,
  title,
  startTime,
  onPlayerReady,
  seekRequest,
  playerId, // Destructure playerId
}) => {
  const playerRef = useRef<YouTubePlayer | null>(null);
  const videoTitle = title || 'YouTube video player';
  
  let mockUrl = `https://www.youtube.com/watch?v=${youtubeId}`;
  if (startTime && startTime > 0 && (!seekRequest || seekRequest.time !== startTime)) {
    mockUrl += `&t=${startTime}s`;
  } else if (seekRequest) {
    mockUrl = `https://www.youtube.com/watch?v=${youtubeId}&t=${seekRequest.time}s`;
  }

  const opts: YouTubeProps['opts'] = {
    playerVars: {
      autoplay: (startTime && startTime > 0) || (seekRequest && seekRequest.time > 0) ? 1 : 0,
      start: seekRequest ? seekRequest.time : (startTime || 0),
    },
  };

  if (seekRequest && opts.playerVars) {
    opts.playerVars.start = seekRequest.time;
    opts.playerVars.autoplay = 1; 
  } else if (startTime && opts.playerVars) {
    opts.playerVars.start = startTime;
    opts.playerVars.autoplay = 1; 
  }

  const handleReady: YouTubeProps['onReady'] = (event) => {
    playerRef.current = event.target;
    if (onPlayerReady) {
      onPlayerReady(event.target);
    }
  };

  useEffect(() => {
    if (seekRequest && playerRef.current) {
      playerRef.current.seekTo(seekRequest.time, true);
      playerRef.current.playVideo();
    }
  }, [seekRequest]); 

  return (
    <div className={styles.videoPlayerContainer} id={playerId}> {/* Use playerId here */}
      <div className={styles.browserWindow}>
        <div className={styles.videoFrameHeader}>
          <div className={styles.trafficLights}>
            <span className={`${styles.trafficLight} ${styles.trafficLightRed}`}></span>
            <span className={`${styles.trafficLight} ${styles.trafficLightYellow}`}></span>
            <span className={`${styles.trafficLight} ${styles.trafficLightGreen}`}></span>
          </div>
          <div className={styles.videoUrlBar}>{mockUrl}</div>
        </div>
        <div className={styles.videoFrame}>
          <div className={styles.videoContent}>
            <YouTube
              videoId={youtubeId}
              opts={opts}
              onReady={handleReady}
              className={styles.youtubePlayer} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StyledVideoPlayer;
