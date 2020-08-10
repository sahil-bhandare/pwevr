import React from 'react';
import logo from '../images/logo.svg';
import '../styles/header.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

function Header() {

  return(
    <div class="header">
        <Link to={'/'}><img src={logo} class="pwevr-logo" alt="PWEVR LOGO"></img></Link>
    </div>
  );

}

export default Header;
