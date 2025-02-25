import React from 'react'
import "../../Style/Header.css"

const Header = () => {
  return (
    <div className='header_body'>
        <div className="header_wrapper">
            <div className="logo">
                <img src="/public/logo.png" alt="" />
            </div>
            <div className="text">
                <h4>HOME</h4>
                <h4>ABOUT US</h4>
                <h4>FEATURES PAGE</h4>
                <h4>GET INVOLVE</h4>
                <h4>CONTACT US</h4>
            </div>
            <div className="right">
                <div className="donate">
                    <p>DONATE</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header