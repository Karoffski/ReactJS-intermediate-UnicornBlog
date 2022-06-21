import React from "react";
import logo from '../logo.svg';
import { Link } from 'react-router-dom';

export const NavigationBar = () => {
    return (
      <div className="navigation-bar">
      <Link to="/"><img src={logo} alt="logo" className='logo'></img></Link>
        <nav>
          <ul><Link to="/gallery">Gallery</Link></ul>
          <ul><Link to="/upload">Upload</Link></ul>
        </nav>
      </div>
    );
}