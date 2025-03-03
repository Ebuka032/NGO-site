import React from 'react'
import { useNavigate } from 'react-router'

const DonationAbout = () => {
  const navigate = useNavigate();
  return (
    <div className='donation-sectionMain'>
        <section className="donation-section">
        <h2>
          SUPPORT US AND CHANGE THE <br /> COUSE OF A PERSON’S <br />
          LIFE TODAY!
        </h2>
        <button className="donate-button" onClick={()=>navigate("/donate")}>DONATE NOW</button>
      </section>
    </div>
  )
}

export default DonationAbout