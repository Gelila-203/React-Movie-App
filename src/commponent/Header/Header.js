import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
      <Link to="/" >
        <div className='logo' >
          Movie App
        </div>

      </Link>

      <div className='user-imgage'>
        <img src='https://cdn1.iconfinder.com/data/icons/mix-color-3/502/Untitled-7-1024.png' />

      </div>


    </div>
  );
}

export default Header;
