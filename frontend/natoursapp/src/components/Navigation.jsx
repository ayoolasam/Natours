import React from 'react'
import './Navigation.scss'

const Navigation = () => {
  return (
    
     <div className="navigation">
      <input type="checkbox" className="navigation_checkbox" id="navi_toggle"/>
      <label htmlFor="navi_toggle" className="navigation_button">
        <span className='navigation_icon'>
&nbsp;
        </span>
      </label>
      <div className="navigation_background">
        &nbsp;
      </div>
      <nav className="navigation_nav">
        <ul className="navigation_list">
       <li className="navigation_item">
        <a href="#" className="navigation_link">About Natours</a>
       </li>
       <li className="navigation_item">
        <a href="#" className="navigation_link">Your Benefits</a>
       </li>
       <li className="navigation_item">
        <a href="#" className="navigation_link">Popular tours</a>
       </li>
       <li className="navigation_item">
        <a href="#" className="navigation_link">Stories</a>
       </li>
       <li className="navigation_item">
        <a href="#" className="navigation_link">Book now</a>
       </li>
        </ul>
      </nav>
      </div> 
  
  )
}

export default Navigation