import React from 'react'
import "../../Style/Footer.css"
import { RiFacebookCircleFill } from "react-icons/ri";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { IoMailSharp } from "react-icons/io5";
const Footer = () => {
  return (
    <div className='footer_body'>
        <div>
            <div className='logo'>
                <img  src="/public/logo.png" alt=""/>
            </div>
        </div>
        <div className='text'>
            <h3>Our contacts<br/><br/>
            8, Exellence & Friends street<br/>
            Dawaki,Abuja (FCT) Nigeria<br/><br/>
            Exellence House, plot 5001<br/>
            Commercial Action Area, New<br/>
            Owerri, Imo State Nigeria.</h3>
            <h3>Mobile:<br/>
            +234 809 608 3359,<br/>
            +234 809 608 3336<br/><br/>
            FOLLOW US:<br/>
            <RiFacebookCircleFill />
            <AiFillTwitterCircle/>
            <AiFillInstagram/>
            <IoMailSharp/></h3>
            

            <h4></h4>

        </div>
    </div>
  )
}

export default Footer