import React from 'react'
import './About.scss'
import nat1 from "../../img/nat-1-large.jpg";
import nat2 from "../../img/nat-2-large.jpg";
import nat3 from "../../img/nat-3-large.jpg";

const About = () => {
  return (
    <div>
      <section className="section-about">
          <div className="u-center-text u-margin-bottom-80">
            <h2 className="heading-secondary">
              Exciting tours for adventuruos people
            </h2>
          </div>
          <div className="row">
            <div className="first-section">
              <h3 className="heading-tertiary u-margin-bottom-2">
                You're going to fall in love with nature
              </h3>
              <p className="paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus, eius est consequatur aliquam sint ut molestiae
                doloremque modi reprehenderit alias aperiam. Placeat esse, quo
                voluptates asperiores ipsa hic a consequatur?
              </p>

              <h3 className="heading-tertiary u-margin-bottom-2">
                Live adventures like you never have before
              </h3>
              <p className="paragraph">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Dolorum consequatur reiciendis fugit a expedita inventore
                sapiente officiis quo est atque nostrum, commodi vel error amet
                adipisci? Ex, ratione. Animi, quisquam!
              </p>
              <a href="#" className="btn-text">
                Learn More &rarr;
              </a>
            </div>

            <div className="second-section">
              <div className="composition">
                <img
                  src={nat1}
                  alt="Photo 1"
                  className="composition_photo composition-photo-p1"
                />
                <img
                  src={nat2}
                  alt="Photo 2"
                  className="composition_photo composition-photo-p2"
                />
                <img
                  src={nat3}
                  alt="Photo 3"
                  className="composition_photo composition-photo-p3"
                />
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default About