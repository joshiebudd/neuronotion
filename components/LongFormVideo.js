import React from 'react';

const VideoSection = () => {
  // Assuming the video URL and thumbnail are passed as props, or can be imported
  const videoUrl = 'https://NeuroNotionPullZonw.b-cdn.net/ProductDemoFinal.mp4';
  const thumbnailUrl = 'https://raw.githubusercontent.com/joshiebudd/neuronotion/main/public/thumbnailfordemo.png';
  
  // This function could be used to handle any interactions like analytics events
  const handlePlayButtonClick = () => {
    // Analytics event logic can be implemented here
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <div className="mb-4">
        {/* Video thumbnail with play button */}
        <div className="relative cursor-pointer" onClick={handlePlayButtonClick}>
          <video
            className="w-full rounded-lg"
            controls
            poster={thumbnailUrl}
          >
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute top-0 right-0 bottom-0 left-0 flex items-center justify-center">
            <svg className="h-12 w-12 text-gray-800" fill="currentColor" viewBox="0 0 84 84">
              <circle opacity="0.9" cx="42" cy="42" r="42" fill="white" />
              <path d="M55.891 42.752l-22.23 12.564V30.189z" />
            </svg>
          </div>
        </div>
      </div>
      <p className="text-gray-600 text-sm">
        WATCH THIS LONG FORM VIDEO BELOW TO FIND OUT HOW TO DO XYZ. REPLACE COPY.
      </p>
    </div>
  );
};

export default VideoSection;
