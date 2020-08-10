import React from 'react';
import '../styles/homepage.css';
import logo from '../images/logo.svg';
import ev from '../images/ev.svg';
import arrow from '../images/arrow.svg';
import facebook from '../images/facebook.svg';
import instagram from '../images/instagram.svg';
import linkedin from '../images/linkedin.svg';
import twitter from '../images/twitter.svg';
import mail from '../images/mail.svg';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

function HomePage() {

  var date = new Date();
  var year = date.getFullYear();

  return (
    <div class="row no-gutters">

      <div class="col-lg-4">
        <div id="left-division">
          <Link to={'/'}><img src={logo} class ="logo" alt="PWEVR LOGO"></img></Link>
          <p class="tagline">
            PWEVR makes EV Charging <br />
            easier than ever. We create <br />
            Universal EV Charging <br />
            Solutions to power EVs <br />
            and support the growing <br />
            Indian EV Ecosystem.
          </p>
          <a style={{textDecoration: "none"}} href="#right-division"><button class="learn-button">Learn More</button></a>
        </div>
      </div>

      <div class="col-lg-8">
        <div id="right-division">
          <ul class="horizontal-list">
            <strong><li class="menu"><Link to={'/about'} class="navigation-buttons">About</Link></li></strong>
            <strong><li class="menu"><Link to={'/products'} class="navigation-buttons">Products</Link></li></strong>
            <strong><li class="menu"><Link to={'/services'} class="navigation-buttons">Services</Link></li></strong>
            <strong><li class="menu"><Link to={'/subscribe'} class="navigation-buttons">Subscribe</Link></li></strong>
          </ul>
          <img src={ev} class ="ev selectDisable" alt="ev"></img>
          <a style={{textDecoration: "none"}} href="#left-division"><img src={arrow} class ="arrow" alt="arrow"></img></a>
          <ul class="social-media">
            <li class="social-media-navigation"><a href="mailto:sahil.bhandare@gmail.com"><img src={mail} class ="social-media-buttons" alt="mail"></img></a></li>
            <li class="social-media-navigation"><a href="https://www.linkedin.com/in/sahil-bhandare/?originalSubdomain=in"><img src={linkedin} class ="social-media-buttons" alt="linkedin"></img></a></li>
            <li class="social-media-navigation"><a href="https://www.facebook.com/sahil.bhandare.3"><img src={facebook} class ="social-media-buttons" alt="facebook"></img></a></li>
            <li class="social-media-navigation"><a href="https://twitter.com/Sahil_bhandare?s=09"><img src={twitter} class ="social-media-buttons" alt="twitter"></img></a></li>
            <li class="social-media-navigation"><a href="https://www.instagram.com/yes.yeah.edge.aye.yell/?igshid=1itw2c1h6wfx3"><img src={instagram} class ="social-media-buttons" alt="instagram"></img></a></li>
          </ul>
          <p class="copyright">&copy; Copyright {year} Sahil Bhandare.</p>
        </div>
      </div>

    </div>
  );

}

export default HomePage;
