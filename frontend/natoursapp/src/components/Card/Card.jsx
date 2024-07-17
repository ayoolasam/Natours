import React from 'react'
import './card.scss'

const Card = () => {
  return (
    <div>


<section className="section-tours" id="section-tours">
          <div className="u-center-text u-margin-bottom-80">
            <h2 className="heading-secondary">MOST POPULAR TOURS</h2>
          </div>
          <div className="rowss">
            <div className="tour"> 
              <div className="tour__side tour__side--front">
                <div className="tour_picture tour_picture-1">&nbsp;</div>
                <h4 className="tour-heading">
                  <span className=" tour_heading-span tour_heading-span--1">
                    The Sea Explorer
                  </span>
                </h4>
                <div className="tour-details">
                  <ul className='tour-list'>
                    <li className='tour-item'> 3 day tours</li>
                    <li> up to 30 people</li>
                    <li> 2 tour guides</li>
                    <li>Sleep in Cozy hotels</li>
                    <li> Difficulty:Easy</li>
                  </ul>
                </div>
              </div>
              <div className="tour__side tour__side--back tour__side--back-first">
                <div className="tour__cta">
                  <div className="tour___price-box">
                    <p className="tour__price-only">Only</p>
                    <p className="tour__price-value">$297</p>
                  </div>
                  <a href="#popup" className="btn btn-white">
                    Book Now
                  </a>
                </div>
              </div>
            </div>

            <div className="tour">
              <div className="tour__side tour__side--front">
                <div className="tour_picture tour_picture-2">&nbsp;</div>
                <h4 className="tour-heading">
                  <span className=" tour_heading-span tour_heading-span--2">
                    The Forest Hiker
                  </span>
                </h4>
                <div className="tour-details">
                  <ul className='tour-list'>
                    <li className='tour-item' > 3 day tours</li>
                    <li> up to 30 people</li>
                    <li> 2 tour guides</li>
                    <li>Sleep in Cozy hotels</li>
                    <li> Difficulty:Easy</li>
                  </ul>
                </div>
              </div>
              <div className="tour__side tour__side--back tour__side--back-second">
                <div className="tour__cta">
                  <div className="tour___price-box">
                    <p className="tour__price-only">Only</p>
                    <p className="tour__price-value">$397</p>
                  </div>
                  <a href="#popup" className="btn btn-white">
                    Book Now
                  </a>
                </div>
              </div>
            </div>
            <div className="tour ">
              <div className="tour__side tour__side--front">
                <div className="tour_picture tour_picture-3">&nbsp;</div>
                <h4 className="tour-heading">
                  <span className=" tour_heading-span tour_heading-span--3">
                    The Snow Adventurer
                  </span>
                </h4>
                <div className="tour-details">
                  <ul className='tour-list'>
                    <li className='tour-item'> 3 day tours</li>
                    <li> up to 30 people</li>
                    <li> 2 tour guides</li>
                    <li>Sleep in Cozy hotels</li>
                    <li> Difficulty:Easy</li>
                  </ul>
                </div>
              </div>
              <div className="tour__side tour__side--back tour__side--back-third">
                <div className="tour__cta">
                  <div className="tour___price-box">
                    <p className="tour__price-only">Only</p>
                    <p className="tour__price-value">$497</p>
                  </div>
                  <a href="#popup" className="btn btn-white">
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="u-center-text u-margin-top-100">
            <a href="#" className="btn btn-white btn-color">
              Discover all tours
            </a>
          </div>
        </section>
    </div>
  )
}

export default Card