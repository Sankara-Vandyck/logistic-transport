import React from 'react';
import LoginForm from '../components/LoginForm'; // Adjust the import path as necessary

const LoginParentComponent = () => {
 const [showLogin, setShowLogin] = React.useState(false);

 const toggleLogin = () => {
    setShowLogin(!showLogin);
 };

 return (
    <div>
   
      <LoginForm showLogin={showLogin} toggleLogin={toggleLogin} />
      
    </div>
 );
};

export default LoginParentComponent;
