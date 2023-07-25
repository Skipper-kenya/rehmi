import React from "react";
import "./homepage.css";
import {
  GraduationCap,
  FileCloud,
  UsersFour,
  Smiley,
  TwitterLogo,
  LinkedinLogo,
  InstagramLogo,
  Copyright,
  Question,
  Envelope,
} from "phosphor-react";
import { Link } from "react-router-dom";
const Homepage = () => {
  return (
    <div className="homepage">
      <section className="homepageImg">
        <img src="https://images.pexels.com/photos/1370298/pexels-photo-1370298.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
        <div className="picIntro">
          <h2>We Guarantee Education for a better world.</h2>
          <h3>
            In our society today education has been a powerful tool for
            transition.let's embrace it.
          </h3>
          <h4>
            Thank you for choosing us.
            <span>
              <Smiley size={20} />
            </span>
          </h4>
          <Link to={"/about"}>
            <button>Read More</button>
          </Link>
        </div>
      </section>

      <section className="programsIntro">
        <ProgramsCards
          link={Link}
          btnTo={"/about"}
          h3="Get to know us"
          p="Check out why we stand above all the others in matters education."
          img={<Question size={50} />}
        />
        <ProgramsCards
          link={Link}
          btnTo={"/programs"}
          h3="Quality programs"
          p=" Our programs are student tailored to ensure curriculum compatibility."
          img={<FileCloud size={50} />}
        />
        <ProgramsCards
          link={Link}
          btnTo={"/contacts"}
          h3="Massive support"
          p="  You can clarify any doubts you may have by checking out our support team."
          img={<UsersFour size={50} />}
        />
      </section>

      <section className="promote">
        <div className="promote1">
          <h3>Why choose us?</h3>
          <ul>
            <li>We offer our services free of charge.</li>
            <li>We tailor our center services to suit your needs.</li>
            <li>Quality assurance</li>
            <li>Curriculum-bound</li>
            <li>Unwavering customer support.</li>
            <li>We are a team of dedicated members.</li>
          </ul>
        </div>
        <div className="promote2">
          <p>Remember always education is the key to success.</p>
        </div>
      </section>

      <section className="footer">
        <div className="home-social">
          <a href="https://www.twitter.com/" target="_blank">
            <TwitterLogo size={30} />
          </a>
          <a href="https://www.linkedin.com/" target="_blank">
            <LinkedinLogo size={30} />
          </a>
          <a href="mailTo:rehmi6457@gmail.com" target="_blank">
            <Envelope size={30} />
          </a>
        </div>
        <div className="topNavrefs">
          <Link to={"/"}>Home</Link>
          <Link to={"/programs"}>Programs</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/contacts"}>Contacts</Link>
        </div>
        <div className="alr">
          <p>
            <Copyright size={15} />
            2023 rastamanVibrations | All Rights Reserved
          </p>
        </div>
      </section>
    </div>
  );
};

const ProgramsCards = (props) => {
  return (
    <div className="introcards">
      <h3>{props.h3}</h3>
      <span>{props.img}</span>
      <p>{props.p}</p>
      <props.link to={props.btnTo}>
        <button>check out</button>
      </props.link>
    </div>
  );
};

export default Homepage;
