import React, { useState } from 'react';
import SignUpForm from '../components/SignUpForm';

function SignParentComponents() {
  const [showSignUp, setShowSignUp] = useState(false);

  const handleOpen = () => {
    setShowSignUp(true);
  };

  const handleClose = () => {
    setShowSignUp(false);
  };

  return (
    <div>
      <button className="bg-black hover:bg-sky-700 text-white font-bold py-2 px-4 rounded" onClick={handleOpen}>
        GET STARTED
      </button>
      {showSignUp && <SignUpForm onClose={handleClose} />}
    </div>
  );
}

export default SignParentComponents;