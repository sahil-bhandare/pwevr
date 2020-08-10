import React from 'react';
import '../styles/about.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Header from '../components/header.jsx';
import Menu from '../components/menu.jsx';
import Footer from '../components/footer.jsx';

function About() {

  return(
    <div>
      <Header />
      <Menu />
      <div class="body-container">
      <u><strong><p class="about-heading">About</p></strong></u>
      <p class="about-contents">
      PWEVR is on a mission to bring a seamless EV charging experience for all kinds of EV users ranging from eBikes,
      eRickshaws, eCars to eBuses. We aim at building solutions for the layman to adopt EV charging seamlessly without
      the need for upskilling.
      <br/><br/>
      At PWEVR we explore the question, "Can the evolution of mobile chargers inspire the future of EV chargers?". The
      variety of standards & connectors available in the market today creates hinderance for adoption of EVs in India. The
      strong policies & guidelines for EV manufacturers are yet to play a major role.
      <br/><br/>
      We see this ambiguity as an opportunity. Team PWEVR is working on creating a bio-inspired Smart Universal EV Charger
      which is capable of charging any type of EV irrespective of the standard & connector type. PWEVR chargers are
      potentially capable of identifying the standard of charging needed for the EV once the connection is established and
      also has the capability to vary the output power to ensure maximum efficiency.
      We have also used bio-inspiration to design our own Universal EV-Charger Connector directly compatible with CCS2 & type-2
      connector. A user can connect Universal type to CHAdeMO/ Tesla/ GB/T cable and the smart charger will take
      care of the rest.
      We are also in the process of creating an app which will be used to control the chargers. Our aim
      is to make the UI as simple as a TV remote and the UX as intuitive as a petrol station.
      <br/><br/>
      We are committed to developing Made in India EV DC charging solutions which are easy to setup & operate.
      PWEVR is looking to set up a network of EV chargers across India in the future.
      </p>
      <Footer/>
      </div>
    </div>
  );

}

export default About;
