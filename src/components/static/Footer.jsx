import React from 'react'
import "../../Style/Footer.css"
import { RiFacebookCircleFill } from "react-icons/ri";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { IoMailSharp } from "react-icons/io5";
const Footer = () => {
  return (
    <div className='footer_body'>
       <div className="footer_wrapper">
        <div className="footer_left">
          <div className="footer_logo">
              <img src="/cfhi lw.png" alt="" />
          </div>
        </div>
        <div className="footer_center">
          <h1 className='footer_header'>Our Contacts</h1>
          <h3 className='address'>8, Excellence & Friends Street Dawaki, Abuja (FCT) Nigeria</h3>
          <h3 className='address'>Excellence House, Plot 5001 Commercial Action Area, New Owerri, Imo State Nigeria</h3>
        </div>
        <div className="footer_right">
          <h1 className='footer_header'>Mobile:</h1>
          <h3 className='address'>+234 809 608 3359</h3>
          <h3 className='address'>+234 809 608 3336</h3>
          <h3 className='address'>Follow us: </h3>
          <div className="footer_logo1">
            <RiFacebookCircleFill />
            <AiFillTwitterCircle />
            <AiFillInstagram />
            <IoMailSharp />
          </div>
        </div>
       </div>
    </div>

  )
}

export default Footer