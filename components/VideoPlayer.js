import React from 'react';

export const VideoPlayer = ({ videoUrl, title }) => {
  return (
    <div className="relative">
      <video 
        src={videoUrl} 
        controls
        playsInline
        className="w-full h-auto rounded-lg shadow-xl"
        style={{ 
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 10px 10px -5px rgba(0, 0, 0, 0.2)',
        }}
        title={title}
      />
    </div>
  );
}; 