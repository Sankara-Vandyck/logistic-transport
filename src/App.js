import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './page/HomePage'; 
import './App.css';
import './index.css';
import LoadingSpinner from './components/LoadingSpinner';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
 const [isLoading, setIsLoading] = useState(true);

 useEffect(() => {
    // Simulate fetching data
    setTimeout(() => {
      setIsLoading(false);
    }, 4000); // Adjust the delay as needed
 }, []);

 return (
    <>
      {isLoading && <LoadingSpinner />}
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
 );
}

export default App;
