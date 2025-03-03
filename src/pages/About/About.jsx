import React from 'react'
import "./about.css"
import OurFocus from '../../components/AbountsCom/OurFocus'
import AboutUs from "../../components/AbountsCom/AboutUs"
import ConntinueourApproach from "../../components/AbountsCom/ConntinueourApproach"
import DonationAbout from "../../components/AbountsCom/DonationAbout"


const About = () => {
  return (
    <div className='aboutMain'>
        <div className='langingPage'>
            <section>
                <div>
                  {/* ebuka */}
                    <h1>AT CFHI, ARE DEDICATED TO IMPROVING THE LIVING <br /> STANDING OF ALL HUMANS IN EVERY </h1>
                </div>
            </section>
        </div>
        <OurFocus/>
        <AboutUs/>
        <ConntinueourApproach/>
        <DonationAbout/>
    </div>
  )
}

export default About