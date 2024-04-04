import React from 'react';

const BlinkingCircles = () => {
  return (
    <div className="absolute inset-0  flex justify-center items-center">
      <div className="absolute animate-ping w-10 h-10 rounded-full bg-blue-400 opacity-75" />
      <div className="absolute animate-ping w-18 h-18 rounded-full bg-blue-400 opacity-50 delay-100" />
      <div className="absolute animate-ping w-26 h-26 rounded-full bg-blue-400 opacity-25 delay-200" />
    </div>
  );
};

export default BlinkingCircles;
