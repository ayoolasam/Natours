import React from 'react'
import './form.scss'

export const Form = () => {
  return (
    <div>
 <section className="section-book">
<div className="container">
  <div className="book">

    <div className="book_form">
    <div className="u-margin-bottom-80 book-font">
            <h2 className="heading-tertiary">START BOOKING NOW!</h2>
          </div>
      <form className="form" action="#">
<div className="form_group">
 <input type="text" className="form_input" placeholder="Full name" id="name" required/>
 <label htmlFor="name" className="form_label">Full Name</label>
</div>
<div className="form_group">
 <input type="email" className="form_input" placeholder="Email" id="name" required/>
 <label htmlFor="email" className="form_label">Email address</label>
</div>
<div className="form_group">
  <div className="form_radio-group">
    <input type="radio" className="form_radio-input" id="small" name="size"/>
    <label htmlFor="small" className="form_radio-label">
      <span className="form_radio-button"></span>      Small tour group</label>
  </div>


  <div className="form_radio-group">
    <input type="radio" className="form_radio-input" id="large" name="size"/>
    <label htmlFor="large" className="form_radio-label">
    <span className="form_radio-button"></span>Large tour group</label>
  
</div>
</div>
<div className="form-group">
  <button className=" btn-new btn-text">Next stop &rarr;</button>
</div>
      </form>
    </div>
  </div>
</div>

        </section>


    </div>
  )
}
