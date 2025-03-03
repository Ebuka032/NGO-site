import React from 'react'
import "./Header.css"
import { NavLink, useNavigate} from 'react-router'
import logo from "../../assets/Images/logo.png"


const Header = () => {
    const navigate = useNavigate();
  return (
    <div className='header_body'>
        <div className="header_wrapper">
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="text">
                <NavLink to="/" className="nav-link">
                <h4>Home</h4>
                </NavLink>
                <NavLink to="/about" className="nav-link">
                <h4>About Us</h4>
                </NavLink>
                <NavLink to="/features" className="nav-link">
                <h4 >Features Page</h4> 
                </NavLink>
                <NavLink to="/involve" className="nav-link">
                <h4>Get Involve</h4>
                </NavLink>
                <h4>Contact Us</h4>
            </div>
            <div className="right">

                <div className="donate" onClick={() => navigate('/donate')}>
                    Donate
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header