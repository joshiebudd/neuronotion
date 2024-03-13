import React from 'react';

const LongFormVideo = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Neuro Notion</h2>
        <div className="text-gray-700 mb-6">
          WATCH THIS LONG FORM VIDEO BELOW TO FIND OUT HOW TO DO XYZ. REPLACE
          COPY.
        </div>
        <div className="flex justify-center">
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
            <svg
              className="fill-current w-6 h-6 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M10 4.5l6 6-6 6-1.5-1.5L12.2 11H4v-2h8.2L8.5 5.5z" />
            </svg>
            <span>Watch Video</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LongFormVideo;