import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import React from 'react'
import {Outlet} from "react-router-dom"

const Homelayout = () => {
  return (
    <>
    
        <Header />
        <Outlet />
        <Footer />
    </>
  )
}

export default Homelayout
