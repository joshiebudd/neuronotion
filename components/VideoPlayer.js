import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Settings, Maximize } from 'lucide-react';

export const VideoPlayer = ({ videoUrl, title, autoPlay = false, muted = false, loop = false }) => {
  const videoRef = useRef(null);
  const progressRef = useRef(null);
  const volumeRef = useRef(null);
  
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(muted);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [showControls, setShowControls] = useState(true);
  const [showSettings, setShowSettings] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const playbackSpeeds = [0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2];

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedMetadata = () => {
      setDuration(video.duration || 36);
    };

    const handleTimeUpdate = () => {
      setCurrentTime(video.currentTime);
    };

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    
    const handleEnded = () => {
      setIsPlaying(false);
      // Don't restart for non-looping videos
      if (!loop) {
        video.currentTime = video.duration || 36;
      }
    };

    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);
    video.addEventListener('ended', handleEnded);

    // Set initial duration - default to 36 seconds if not available
    if (video.duration) {
      setDuration(video.duration);
    } else {
      setDuration(36);
    }

    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
      video.removeEventListener('ended', handleEnded);
    };
  }, [loop]);

  const togglePlay = () => {
    const video = videoRef.current;
    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
  };

  const handleProgressClick = (e) => {
    const progressBar = progressRef.current;
    const rect = progressBar.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    const time = percent * duration;
    videoRef.current.currentTime = time;
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    videoRef.current.volume = newVolume;
    videoRef.current.muted = newVolume === 0;
    setIsMuted(newVolume === 0);
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (isMuted) {
      video.volume = volume > 0 ? volume : 0.5;
      video.muted = false;
      setIsMuted(false);
    } else {
      video.volume = 0;
      video.muted = true;
      setIsMuted(true);
    }
  };

  const changePlaybackRate = (rate) => {
    videoRef.current.playbackRate = rate;
    setPlaybackRate(rate);
    setShowSettings(false);
  };

  const toggleFullscreen = () => {
    const video = videoRef.current;
    if (!isFullscreen) {
      if (video.requestFullscreen) {
        video.requestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
    setIsFullscreen(!isFullscreen);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const progressPercent = duration ? (currentTime / duration) * 100 : 0;

  return (
    <div 
      className="relative group bg-black rounded-lg overflow-hidden shadow-xl"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
      style={{ 
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 10px 10px -5px rgba(0, 0, 0, 0.2)',
      }}
    >
      <video
        ref={videoRef}
        src={videoUrl}
        className="w-full h-auto cursor-pointer"
        autoPlay={autoPlay}
        muted={muted}
        loop={loop}
        playsInline
        title={title}
      />

      {/* Video Click Area for Play/Pause */}
      <div 
        className="absolute inset-0 cursor-pointer"
        onClick={togglePlay}
      />

      {/* Custom Controls Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-300 pointer-events-none ${showControls ? 'opacity-100' : 'opacity-0'}`}>
        
        {/* Play/Pause Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-200 rounded-full p-4 transform hover:scale-110 pointer-events-none">
            {isPlaying ? (
              <Pause className="w-8 h-8 text-white" />
            ) : (
              <Play className="w-8 h-8 text-white ml-1" />
            )}
          </div>
        </div>

        {/* Bottom Controls */}
        <div className="absolute bottom-0 left-0 right-0 p-4 pointer-events-auto">
          
          {/* Progress Bar */}
          <div 
            ref={progressRef}
            className="w-full h-2 bg-white/20 rounded-full cursor-pointer mb-4 group/progress"
            onClick={handleProgressClick}
          >
            <div 
              className="h-full bg-[#30bcd9] rounded-full relative transition-all duration-150"
              style={{ width: `${progressPercent}%` }}
            >
              <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#30bcd9] rounded-full opacity-0 group-hover/progress:opacity-100 transition-opacity duration-150 cursor-grab"></div>
            </div>
          </div>

          {/* Control Buttons */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              
              {/* Play/Pause */}
              <button
                onClick={togglePlay}
                className="text-white hover:text-[#30bcd9] transition-colors duration-200"
              >
                {isPlaying ? (
                  <Pause className="w-6 h-6" />
                ) : (
                  <Play className="w-6 h-6" />
                )}
              </button>

              {/* Time Display */}
              <div className="text-white text-sm font-medium">
                {formatTime(currentTime)} / {formatTime(duration)}
              </div>
            </div>

            <div className="flex items-center space-x-4">
              
              {/* Volume Controls - Moved to bottom right */}
              <div className="flex items-center space-x-2 group/volume">
                <button
                  onClick={toggleMute}
                  className="text-white hover:text-[#30bcd9] transition-colors duration-200"
                >
                  {isMuted || volume === 0 ? (
                    <VolumeX className="w-5 h-5" />
                  ) : (
                    <Volume2 className="w-5 h-5" />
                  )}
                </button>
                
                <div className="relative">
                  <input
                    ref={volumeRef}
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    value={isMuted ? 0 : volume}
                    onChange={handleVolumeChange}
                    className="w-0 group-hover/volume:w-20 transition-all duration-200 h-1 bg-white/20 rounded-lg appearance-none cursor-pointer opacity-0 group-hover/volume:opacity-100"
                    style={{
                      background: `linear-gradient(to right, #30bcd9 0%, #30bcd9 ${(isMuted ? 0 : volume) * 100}%, rgba(255,255,255,0.2) ${(isMuted ? 0 : volume) * 100}%, rgba(255,255,255,0.2) 100%)`
                    }}
                  />
                </div>
              </div>

              {/* Playback Speed */}
              <div className="relative">
                <button
                  onClick={() => setShowSettings(!showSettings)}
                  className="text-white hover:text-[#30bcd9] transition-colors duration-200 flex items-center space-x-1"
                >
                  <Settings className="w-5 h-5" />
                  <span className="text-sm">{playbackRate}x</span>
                </button>

                {showSettings && (
                  <div className="absolute bottom-full right-0 mb-2 bg-black/90 backdrop-blur-sm rounded-lg p-2 min-w-[120px]">
                    <div className="text-white text-xs font-medium mb-2 px-2">Playback Speed</div>
                    {playbackSpeeds.map((speed) => (
                      <button
                        key={speed}
                        onClick={() => changePlaybackRate(speed)}
                        className={`w-full text-left px-2 py-1 text-sm rounded transition-colors duration-150 ${
                          playbackRate === speed 
                            ? 'bg-[#30bcd9] text-black' 
                            : 'text-white hover:bg-white/10'
                        }`}
                      >
                        {speed}x {speed === 1 ? '(Normal)' : ''}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Fullscreen */}
              <button
                onClick={toggleFullscreen}
                className="text-white hover:text-[#30bcd9] transition-colors duration-200"
              >
                <Maximize className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 