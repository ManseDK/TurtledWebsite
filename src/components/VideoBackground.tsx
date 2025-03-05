import { useEffect, useRef } from 'react';

interface VideoBackgroundProps {
  videoId: string;
  className?: string;
}

const VideoBackground = ({ videoId, className = "" }: VideoBackgroundProps) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // YouTube iframe API functionality
    // Load the YouTube API if it hasn't been loaded yet
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
    }

    // Initialize the player when the API is ready
    let player: any;
    const onYouTubeIframeAPIReady = () => {
      player = new window.YT.Player(iframeRef.current, {
        videoId: videoId,
        playerVars: {
          autoplay: 1,
          controls: 0,
          disablekb: 1,
          enablejsapi: 1,
          iv_load_policy: 3,
          loop: 1,
          modestbranding: 1,
          playsinline: 1,
          rel: 0,
          showinfo: 0,
          mute: 1, // Muted to allow autoplay
        },
        events: {
          onReady: (event: any) => {
            event.target.playVideo();
            // Set to loop by seeking to the start when the video ends
            event.target.addEventListener('onStateChange', (e: any) => {
              if (e.data === window.YT.PlayerState.ENDED) {
                event.target.seekTo(0);
                event.target.playVideo();
              }
            });
          }
        }
      });
    };

    // If the API is already loaded, initialize directly
    if (window.YT && window.YT.Player) {
      onYouTubeIframeAPIReady();
    } else {
      // Otherwise wait for the API to load
      window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
    }

    return () => {
      if (player && player.destroy) {
        player.destroy();
      }
    };
  }, [videoId]);

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-turtle-green/30 z-10" /> {/* Overlay with turtle-green tint */}
      <div className="relative w-full h-full">
        <iframe
          ref={iframeRef}
          id="youtube-player"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[calc(100%+100px)] h-[calc(100%+100px)]"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default VideoBackground;
