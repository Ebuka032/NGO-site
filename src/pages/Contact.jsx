import React from 'react'
import './contact.css'

const Contact = () => {

  return (
    <>
     <div className='header-contact'>
        <h2>Contact Us</h2>
        <p>You can call in or send an email.</p>
     </div>

     <div className='content'>
        <div className='image-section'>
        <div className="images">
            <img src="src\assets\Images\office building.jpg" alt="Group" />
            <img src="src\assets\Images\office image 2.jpg" alt="group-image" />
        </div>
        </div>

        <div className='form-section'>
            <h2>CONTACT US</h2>
            <h3>Get in Touch with us</h3>

            <form>
              <div className="form-row">
               <input type="text" placeholder="First Name" />
               <input type="text" placeholder="Last Name" />
              </div>
              <input type="email" placeholder="Email" />
              <input type="text" placeholder="Subject" />
              <textarea placeholder="Subject"></textarea>
              <button type="submit">SEND REQUEST</button>
            </form>
           </div>
          </div>

          <div>
          <div className="info-section">
        <div className="info-column">
          <h2>Volunteering</h2>
          <p>For further information on how you can volunteer,<br /> 
          please call: +234(0)809 608 3336, +234(0)809 527 1645, +234(0)908 784 9642</p>
        </div>
        <div className="info-column">
          <h2>Partnership</h2>
          <p>For further information on how you partner with us, please call: +234(0)809 608 3336, +234(0)809 527 1645,<br />
           +234(0)908 784 9642</p>
        </div>
      </div>
      <div className="map-section">
        <p>Emmanuel Cathedral</p>
        {/* type */}
        <img src="src\assets\Images\map frame.png" alt="Map" className="map-image" /> 
      </div>
    </div>



           
       

        
       


    </>
  )
}

export default Contact