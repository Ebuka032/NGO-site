import React from 'react'
import "../../Style/Header.css"
import { NavLink, useNavigate } from 'react-router'

const Header = () => {
    const navigate = useNavigate()
    return (

        <div className="header_wrapper">
            <div className="logo">
                <img src="/public/logo.png" alt="" />
            </div>
            <div className="text">
                <NavLink to={"/"}> <h4>Home</h4></NavLink>
                <h4></h4>
                <NavLink to={"/about-us"}><h4>About Us</h4></NavLink>
                <NavLink to={"/features"}><h4>Features Page</h4></NavLink>
                <NavLink to={"/get-involve"}><h4>Get Involve</h4></NavLink>
                <NavLink to={"/contact-us"}><h4>Contact Us</h4></NavLink>
                <h4></h4>
                <h4></h4>
            </div>
            <div className="right">
                <div className="donate">
                    <p>DONATE</p>
                </div>
            </div>
        </div>
    )
}

export default Header