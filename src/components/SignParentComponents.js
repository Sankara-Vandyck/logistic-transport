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
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleOpen}>
        Sign Up
      </button>
      {showSignUp && <SignUpForm onClose={handleClose} />}
    </div>
  );
}

export default SignParentComponents;