import React from 'react'
import './Popup.scss'
import nat8 from "../../img/nat-8.jpg"
import nat9 from "../../img/nat-9.jpg"


const Popup = () => {
  return (
   
   <div className="popup" id='popup'>
    <div className="popup_content">
      <div className="popup_left">
<img src={nat8} alt="tour Photo" className='popup_img'/>
<img src={nat9} alt="tour Photo" className='popup_img'/>
      </div>
      <div className="popup_right">
        <a href="#section-tours" className="popup_close">
          &times;
        </a>
      <h2 className="heading-tertiary">
        Start Booking Now 
      </h2>
      <h3 className="heading-secondary">
        important &ndash; Please read these Terms before booking
      </h3>
      <p className="popup_text">
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt laudantium sed rem, nihil modi earum velit est ab, illo, voluptates reprehenderit iure totam!
      </p>
      <a href="#" className="btn-text">Book Now</a>
      </div>
    </div>
   </div>
  )
}

export default Popup