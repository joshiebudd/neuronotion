import React from 'react';

const HPAnimation = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="relative w-64 h-64 bg-blue-500">
        {/* Example animated element */}
        <div className="absolute inset-0 bg-red-500 animate-bounce">
          <p className="text-white text-center">Animated Box</p>
        </div>
      </div>
    </div>
  );
};

export default HPAnimation;
