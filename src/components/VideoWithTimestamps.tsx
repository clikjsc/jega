import React, { useState, useCallback, ReactNode } from 'react';
import StyledVideoPlayer from './StyledVideoPlayer'; // Uses react-youtube now
import styles from './VideoWithTimestamps.module.css';
import { YouTubePlayer } from 'react-youtube'; // Import type

interface TimestampData {
  time: number;
  label: string;
  description: React.ReactNode;
}

interface VideoWithTimestampsProps {
  youtubeId: string;
  videoPlayerTitle?: string; 
  introContent?: React.ReactNode;
  timestamps: TimestampData[];
}

const VideoWithTimestamps: React.FC<VideoWithTimestampsProps> = ({
  youtubeId,
  videoPlayerTitle,
  introContent,
  timestamps,
}) => {
  const [seekRequest, setSeekRequest] = useState<{ time: number; key: number } | undefined>(undefined);
  const [player, setPlayer] = useState<YouTubePlayer | null>(null);

  const handleTimestampClick = useCallback((timeInSeconds: number) => {
    const videoElementId = `video-player-container-${youtubeId}`; // Target the StyledVideoPlayer's container
    
    if (player) {
      player.seekTo(timeInSeconds, true);
      player.playVideo();
    } else { 
      setSeekRequest({ time: timeInSeconds, key: Date.now() });
    }

    // Scroll to video player
    // We need to ensure the ID exists on the StyledVideoPlayer or its direct container
    // Let's assume StyledVideoPlayer's root div will have this ID.
    // If not, we might need to pass a ref or adjust.
    setTimeout(() => { // Timeout to allow player to potentially initialize/resize
        const playerElement = document.getElementById(videoElementId);
        if (playerElement) {
          playerElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }, 100); // Small delay

  }, [player, youtubeId]);

  const handlePlayerReady = useCallback((playerInstance: YouTubePlayer) => {
    setPlayer(playerInstance);
    if (seekRequest && playerInstance) {
        playerInstance.seekTo(seekRequest.time, true);
        playerInstance.playVideo();
    }
  }, [seekRequest]);
  
  // The main wrapper of VideoWithTimestamps already has an id: `video-player-${youtubeId}`
  // but we want to scroll to the actual video player container for better centering.
  // So, StyledVideoPlayer's root div should have `id={`video-player-container-${youtubeId}`}`

  return (
    <div className={styles.videoTimestampWrapper}>
      {/* The H1 for the page title will be rendered by Docusaurus from frontmatter */}
      
      <StyledVideoPlayer
        youtubeId={youtubeId}
        title={videoPlayerTitle} 
        onPlayerReady={handlePlayerReady}
        seekRequest={seekRequest}
        // Add an explicit ID here for scrolling
        playerId={`video-player-container-${youtubeId}`} 
      />
      
      {introContent && (
        <div className={styles.introSection}>
          {introContent} 
        </div>
      )}

      {timestamps && timestamps.length > 0 && (
        <div className={styles.timestampsSection}>
          <h2>Nội dung chính trong video</h2>
          <ul>
            {timestamps.map((ts, index) => (
              <li key={index}>
                <span
                  onClick={() => handleTimestampClick(ts.time)}
                  className={styles.timestampLink}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleTimestampClick(ts.time);}}
                >
                  <strong>{ts.label}</strong>
                </span>
                : {ts.description}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default VideoWithTimestamps;
