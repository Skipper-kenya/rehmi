import React from "react";
import "./about.css";
import { DotsThreeOutline } from "phosphor-react";
const About = () => {
  return (
    <div>
      <div className="about-conts">
        <div className="topgear">
          <h1>About Rehmi's Educational Center</h1>
        </div>

        <div className="card2-about">
          <div className="ca1">
            <h3>Who we are?</h3>
            <p>
              we are a dedicated team of teachers united by common goal. We have
              resolved to zero-in on promoting education by using technology to
              avail resources to our learners across the globe.
            </p>
          </div>
          <div className="ca1">
            <h3>Why we are the best?</h3>
            <p>
              <span>
                <DotsThreeOutline size={20} />
              </span>
              Our contents are curriculum based.
            </p>
            <p>
              <span>
                <DotsThreeOutline size={20} />
              </span>
              Our services are free of charge.
            </p>
            <p>
              <span>
                <DotsThreeOutline size={20} />
              </span>
              24/7 Support from our team.
            </p>
            <p>
              <span>
                <DotsThreeOutline size={20} />
              </span>
              We're rooted in education. Most members of this group have an
              educational background, you're rest assured all will be well.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
