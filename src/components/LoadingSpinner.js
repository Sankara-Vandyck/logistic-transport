import React, { useState, useEffect } from 'react';

function LoadingSpinner() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`fixed inset-0 flex items-center justify-center z-10 ${isLoading ? 'visible' : 'invisible'}`}>
      <div className="w-16 h-16 border-t-4 border-b-4 border-blue-500 rounded-full animate-spin"></div>
    </div>
  );
}

export default LoadingSpinner;
