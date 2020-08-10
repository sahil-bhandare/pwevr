import React from 'react';
import '../styles/services.css';
import Connector from '../images/connector.svg';
import Header from '../components/header.jsx';
import Menu from '../components/menu.jsx';
import Footer from '../components/footer.jsx';
import Block_Diagram from '../images/block-diagram.png';

function Services() {

  return(
    <div>
    <Header />
    <Menu />
    <div class="bottom-box">
    <u><strong><p class="services-heading">Services</p></strong></u>
    <u><p class="service-heading">PWEVR CHARGE</p></u>
    <img src={Block_Diagram} class="block-diagram selectDisable" alt="block-diagram"></img>
    <p class="service-tagline">
    PWEVR’s Smart Universal Charger has an architecture that enables a user to charge any EV irrespective of the charging standard & the power capacity required to charge the EV. Our charger ensures scalability of EV Charging Infrastructure in India. Since our charger is a Smart Universal Charger, it enhances adaptability for the consumers.
    <br /><br />
    The charger is capable of smartly identifying the vehicle type & the power it will require for charging. The authentication system is fluid and can authenticate charging for EVs of different ratings. The charger also has a communications system based on OCPP which is the industry standard. Charging an EV is as easy as plugging into the charger using your universal cable, pressing the Start button on the app, and the charger takes care of the rest.
    There are various safety measures built into the PWEVR charger. This ensures that your vehicle has safe charging at all times. The charger is robust and can also identify errors and communicate them to the user. It can also cutoff the power supply if necessary.
    <br /><br />
    With PWEVR CHARGE, there is no more worry about which EV you have & whether the charger will support it. We cater to all.
    <br /><br />
    You just have to pull up, plug in, and start charging. It is as simple as that!
    </p>
    <Footer />
    </div>
    </div>
  );

}

export default Services;
