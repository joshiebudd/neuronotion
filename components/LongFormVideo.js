import React from 'react';

const VideoPlayer = () => {
  let videoRef = React.createRef();

  const playVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    // Added my-8 for margin on the y-axis (top and bottom). Adjust this value as needed for your layout.
    <div className="component1 p-4 flex justify-center items-center my-8"> 
      <div className="relative group cursor-pointer" onClick={playVideo}>
        <video
          ref={videoRef}
          className="max-w-full h-auto rounded-md shadow-lg"
          controls={false}
          preload="none"
          poster="YOUR_POSTER_URL" // Replace with your video poster url
        >
          <source src="YOUR_VIDEO_URL" type="video/mp4" /> {/* Replace with your video url */}
          Your browser does not support the video tag.
        </video>
        <div className="absolute top-0 right-0 bottom-0 left-0 flex justify-center items-center">
          <div
            className="play-button flex justify-center items-center w-16 h-16 bg-gray-800 bg-opacity-50 rounded-full group-hover:bg-opacity-75 transition duration-150 ease-in-out"
            onClick={playVideo}
          >
            <svg className="w-10 h-10 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
