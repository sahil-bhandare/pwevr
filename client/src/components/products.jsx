import React from 'react';
import '../styles/products.css';
import Connector from '../images/connector.svg';
import Header from '../components/header.jsx';
import Menu from '../components/menu.jsx';
import Footer from '../components/footer.jsx';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Coming_Soon from '../images/comingsoon.svg';

function Products() {

  return(
    <div>
    <Header />
    <Menu />
    <div class="btm-container">
      <u><strong><p class="products-heading">Products</p></strong></u>
      <u><p class="product-heading">Universal EV-Charger Connector</p></u>
      <img src={Connector} class="connector selectDisable" alt="universal-connector"></img>
      <p class="product-tagline">
      This is the Universal EV Charger Connector.
      One end of this connector will be connected to the Charger.
      The other end of this connector will be connected to the EV.
      This connector has a Universal Pin Configuration which will act as a standard connector for different EV Charging Pins.
      </p>
      <u><p class="product-heading">PWEVR Charge Mobile App</p></u>
      <p class="product-tagline">
      PWEVR Charge is an app designed keeping the layman user in mind.
      The app allows the user to enable and disable charging for their EV  without the hassle of having to go thru multiple steps & pages.
      The goal is to provide the user a simple, enjoyable & interactive experience.
      </p>
      <Link to={'/mobileapp'} class="try-me-link"><button type="submit" class="try-me-button">Prototype</button></Link>
      <u><p class="product-heading">Smart Universal EV Charger</p></u>
      <p class="product-tagline" style={{marginBottom: "0.25rem"}}>
      The Smart Universal EV Charger has the ability to identify & charge EVs of different kW ratings.
      The chargers are going to be designed and built in compliance with the industry's safety & security standards.
      </p>
      <img src={Coming_Soon} class="coming-soon selectDisable" alt="coming-soon"></img>
    <Footer />
    </div>
    </div>
  );

}

export default Products;
