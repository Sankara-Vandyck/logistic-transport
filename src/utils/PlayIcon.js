import React, { useState } from 'react';

const PlayIcon = () => {
  const [isVisible, setIsVisible] = useState(true);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setIsVisible((prevVisible) => !prevVisible);
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <svg
      className={`fill-current w-8 h-8 flex justify-center align-middle inset-1 ${isVisible ? 'visible' : 'invisible'}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
    >
      <path d="M10 0l10 10-10 10z" />
    </svg>
  );
};

export default PlayIcon;
