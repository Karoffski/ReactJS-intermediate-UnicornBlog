import React from 'react';
import './App.css';
import { NavLink, Routes, Route } from 'react-router-dom';
import logo from './logo.svg'

const  App = () => {
  return (
    <div className='app'>
      <NavigationBar />
      <Main />
    </div>
    )
}

const NavigationBar = () => {
  return (
      <nav className="navigationbar">
        <img src={logo} alt="logo" className='logo'/>
        <ul>
          <li><NavLink exact="true" to="/gallery">Gallery</NavLink></li>
          <li><NavLink exact="true" to="/upload">Upload</NavLink></li>
        </ul>
      </nav>
  );
}

const Content = () => {
  return (
      <div className="content">
          <h1>content</h1>
          <p></p>
      </div>
  )
}

const Upload = () => {
  return (
      <div className="upload">
          <p>upload</p>
      </div>
  )
}

const Gallery = () => {
  return (
      <div className="gallery">
          <p>test</p>
      </div>
  )
}

const Main = () => (
  <Routes>
    <Route path='/' component={Content}></Route>
    <Route path='/gallery' component={Gallery}></Route>
    <Route path='/upload' component={Upload}></Route>
  </Routes>
);

export default App;