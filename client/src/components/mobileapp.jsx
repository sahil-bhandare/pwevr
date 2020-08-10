import React, { Component } from 'react';
import '../styles/mobileapp.css';
import logo from '../images/logo.svg';
import hamburger_menu from '../images/hamburger_menu.png';
import icon from '../images/icon.png';
import QR_Code from '../images/qr-code.svg';
import playstore from '../images/play.png';
import appstore from '../images/app.png';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

function MobileApp() {
  var power_consumed = 10;
  var bill_amount = 50;
  var hours = 7;
  var minutes = 14;
  var seconds = 21;
  return(
    <div class="app-background">
      <img src={logo} class="pwevr-logo-mobile" alt="PWEVR LOGO"></img>
      <div class="top-navbar">
        <img src={hamburger_menu} class="hamburger_menu" alt="hamburger-menu"></img>
        <input type="text" value="Username" class="username-box" disabled/>
        <img src={icon} class="icon" alt="PWEVR ICON"></img>
      </div>
      <div class="select-charger-box">
      <input type="text" value="Select Charger       &#9661;" class="charger-menu" disabled/>
      <img src={QR_Code} class="qr-code" alt="QR Code"></img>
      </div>
      <p class="power-consumed-output">Power Consumed : {power_consumed} kW</p>
      <p class="bill-amount-output">Bill Amount : {bill_amount} ₹</p>
      <p class="time-duration-output">Time Duration : {hours} Hr {minutes} Min {seconds} Sec</p>
      <button class="start-stop-button">Start/Stop</button>
      <button class="contact-button">Contact</button>
      <div class="stores">
      <img src={playstore} class="playstore" alt="playstore"></img>
      <img src={appstore} class="appstore" alt="appstore"></img>
      </div>
    </div>
  );
}

export default MobileApp;
