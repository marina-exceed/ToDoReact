import React from 'react';
import './header.css';
import {Link} from "react-router-dom";


const Header = () => {
  return (
    <div>
      <Link to="/login"><h1>ToDO list</h1></Link>
      <div>
        <p>With the free Todoist app, you can:</p>

        <p>- Add and manage an unlimited number of tasks;</p>

        <p>- Edit your tasks</p>

        <p>- Have access to your task manager with an Internet connection and offline;</p>
      </div>
    </div>
  )
};



export default Header;