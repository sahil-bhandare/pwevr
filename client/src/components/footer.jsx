import React from 'react';
import facebook from '../images/facebook.svg';
import instagram from '../images/instagram.svg';
import linkedin from '../images/linkedin.svg';
import twitter from '../images/twitter.svg';
import mail from '../images/mail.svg';
import '../styles/footer.css';

function Footer() {

  var date = new Date();
  var year = date.getFullYear();
  return(
  <div>
    <ul class="social-media-nav-bar">
      <li class="social-media-nav"><a href="mailto:sahil.bhandare@gmail.com"><img src={mail} class ="social-media-btns" alt="mail"></img></a></li>
      <li class="social-media-nav"><a href="https://www.linkedin.com/in/sahil-bhandare/?originalSubdomain=in"><img src={linkedin} class ="social-media-btns" alt="linkedin"></img></a></li>
      <li class="social-media-nav"><a href="https://www.facebook.com/sahil.bhandare.3"><img src={facebook} class ="social-media-btns" alt="facebook"></img></a></li>
      <li class="social-media-nav"><a href="https://twitter.com/Sahil_bhandare?s=09"><img src={twitter} class ="social-media-btns" alt="twitter"></img></a></li>
      <li class="social-media-nav"><a href="https://www.instagram.com/yes.yeah.edge.aye.yell/?igshid=1itw2c1h6wfx3"><img src={instagram} class ="social-media-btns" alt="instagram"></img></a></li>
    </ul>
    <p class="copyrights">&copy; Copyright {year} Sahil Bhandare.</p>
  </div>
  );
}

export default Footer;
