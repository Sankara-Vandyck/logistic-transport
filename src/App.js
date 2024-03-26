import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './page/HomePage'; 
import './App.css'
import './index.css'
import LoadingSpinner from './components/LoadingSpinner';


function App() {
  return (
      <>
      <LoadingSpinner />
    <Routes>
      
      <Route path="/" element={<HomePage />} />
    
    </Routes>
    </>
  );
}

export default App;
