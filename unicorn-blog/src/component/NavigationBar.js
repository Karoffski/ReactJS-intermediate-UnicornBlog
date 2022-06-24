import React from "react";
import logo from '../unicorn.svg';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

export function NavigationBar() {
  return (
    <div className="navigation-bar">
      <Link to="/"><img src={logo} alt="logo" className='logo'></img></Link>
      <nav className="categories">
        <ul><Link to="gallery"><Button variant="text">Gallery</Button></Link></ul>
        <ul><Link to="upload"><Button variant="text">Upload</Button></Link></ul>
      </nav>
    </div>
  );
}