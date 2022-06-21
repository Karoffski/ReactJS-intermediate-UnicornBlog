import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Content } from './component/Content';
import { Gallery } from './component/Gallery';
import { NavigationBar } from './component/NavigationBar';
import { Upload } from './component/Upload';


const App = () => {
  return (
    
    <div>
      <NavigationBar/>
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/upload" element={<Upload/>} />
        <Route path="/gallery" element={<Gallery/>} />
      </Routes>
    </div>
  )
}

export default App;