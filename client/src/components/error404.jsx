import React from 'react';
import '../styles/error404.css';
import Car from '../images/breakdown.svg';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

function Success() {
  return(
    <div class="error-background">
      <h1 class="error-message" align="center">Error 404!</h1>
      <p class="not-found-message" align="center">Broken Link. Page Not Found.</p>
      <img src={Car} class="broken-car" alt="broken-car"></img>
      <u><Link to={'/'} class="home-button">Home</Link></u>
    </div>
  );
}

export default Success;
