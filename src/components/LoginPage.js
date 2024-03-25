import React, { useState } from "react";

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loginVisible, setLoginVisible] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    // Your login logic here
    console.log("Logging in with:", username, password);
    // Example: You can send login request to server or perform authentication locally
    // Once authenticated, you can trigger the onLogin callback
    onLogin(username);
    setSubmitted(true);
    setLoginVisible(false); // Hide login content after submission
  };

  const handleToggleLogin = () => {
    setLoginVisible(!loginVisible);
  };

  const handleHideLogin = () => {
    setLoginVisible(false);
  };

  return (
    <div>
      <button onClick={handleToggleLogin}>
        <h2>LOGIN</h2>
      </button>
      {loginVisible && (
        <div>
          <form onSubmit={handleLogin}>
            <div>
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit">Click</button>
            {!submitted && <button onClick={handleHideLogin}>Submit</button>}
          </form>
        </div>
      )}
    </div>
  );
};

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (username) => {
    // Perform login/authentication logic here
    // For demonstration purposes, let's just set isLoggedIn to true
    setIsLoggedIn(true);
    console.log(`User ${username} logged in`);
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>Welcome user!</div>
      ) : (
        <LoginPage onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
