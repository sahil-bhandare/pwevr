import React from 'react';
import '../styles/menu.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

function Menu() {

  return(
    <div class="menu-bar">
      <ul class="menu-list">
        <strong><li class="menu-items"><Link to={'/about'} class="nav-btns">About</Link></li></strong>
        <strong><li class="menu-items"><Link to={'/products'} class="nav-btns">Products</Link></li></strong>
        <strong><li class="menu-items"><Link to={'/services'} class="nav-btns">Services</Link></li></strong>
        <strong><li class="menu-items"><Link to={'/subscribe'} class="nav-btns">Subscribe</Link></li></strong>
      </ul>
    </div>
  );

}

export default Menu;
