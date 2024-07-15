import React from 'react'
import './stories.scss'
import nat8 from "../../img/nat-8.jpg";
import nat9 from "../../img/nat-9.jpg";
import video from '../../img/video.mp4'

const Stories = () => {
  return (
    <div>
         <section className="section-stories">
          <div className="bg-video ">
            <video className="bg-video_content" autoPlay muted loop>
         <source src={video} type="video/mp4"/>
         Your browser is not supported!
            </video>
          </div>
          <div className="u-center-text u-margin-bottom-80">
            <h2 className="heading-secondary">
              We make people genuinely happy
            </h2>
          </div>

          <div className="story-row">
            <div className="story story-margin">
              <figure className="story_shape">
                <img className="story_image" src={nat8} alt="Person on a tour"/>
                <figcaption className="story_caption">Mary Smith</figcaption>
              </figure>
              <div className="story_text">
                <h3 className="heading-tertiary ">
                  i had the best week ever with my family
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                  fugiat eum beatae, omnis quidem doloribus unde voluptatibus
                  tempore ullam dolorem assumenda aliquid quos. Suscipit
                  dignissimos quasi, iste repellat natus pariatur.
                </p>
              </div>
            </div>
            <div className="story u-margin-top-50">
              <figure className="story_shape">
              <img className="story_image" src={nat9} alt="Person on a tour"/>
              <figcaption className="story_caption">Ayoola Sam</figcaption>
              </figure>
              <div className="story_text">
                <h3 className="heading-tertiary u-margin-bottom-small">
                
                Wow my life is completely differnt now
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                  fugiat eum beatae, omnis quidem doloribus unde voluptatibus
                  tempore ullam dolorem assumenda aliquid quos. Suscipit
                  dignissimos quasi, iste repellat natus pariatur.
                </p>
              </div>
            </div>
          
          </div>
          <div className="u-center-text u-margin-top-100">
            <a href="#" className="btn-text story-btn">
            Read all stories &rarr;
            </a>
          </div>
         
        </section>
    </div>
  )
}

export default Stories