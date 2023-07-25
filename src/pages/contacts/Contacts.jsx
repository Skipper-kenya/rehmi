import React from "react";
import "./contacts.css";
import { Envelope, PhoneCall, TwitterLogo, User } from "phosphor-react";
function Contacts() {
  return (
    <div>
      <div className="contact-card">
        <div className="cont-top">
          <span>
            <User size={50} />
          </span>
          <h3>Contact us</h3>
          <p>
            Feel free at anytime to reach us through these social media
            platforms
          </p>
        </div>

        <div className="cont-bottom">
          <div className="cont-cards">
            <span>
              <TwitterLogo size={40} />
            </span>
            <p>Twitter</p>
            <a href="https://www.twitter.com/" target="_blank">
              <button>Connect</button>
            </a>
          </div>
          <div className="cont-cards">
            <span>
              <Envelope size={40} />
            </span>
            <p>Email</p>
            <a
              href="mailTo:rehmi6457@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <button>Connect</button>
            </a>
          </div>
          <div className="cont-cards">
            <span>
              <PhoneCall size={40} />
            </span>
            <p>PhoneCall</p>
            <a href="tel:+923024446457" target="_blank">
              <button>Connect</button>
            </a>
          </div>
        </div>
        <div className="cont-bottom"></div>
      </div>
    </div>
  );
}

export default Contacts;
