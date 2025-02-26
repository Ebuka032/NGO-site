import React from 'react'
import "../../Style/Header.css"
import { NavLink } from 'react-router'

const Header = () => {
  return (
    <div className='header_body'>
        <div className="header_wrapper">
            <div className="logo">
                <img src="/public/logo.png" alt="" />
            </div>
            <div className="text">
                <h4>Home</h4>
                <NavLink to='/About'><h4>About Us</h4></NavLink>
                <h4>Features Page</h4>
                <h4>Get Involve</h4>
                <h4>Contact Us</h4>
            </div>
            <div className="right">
                <div className="donate">
                    <p>Donate</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header