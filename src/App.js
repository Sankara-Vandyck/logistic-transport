import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './page/HomePage'; 
import './App.css'
import './index.css'
// import ImageSlide from './page/ImageSlide';



function App() {
  return (
    // <div>
    //   <ImageSlide />
    // </div>
    
    <Routes>
      
      <Route path="/" element={<HomePage />} />
    
    </Routes>
  );
}

export default App;
