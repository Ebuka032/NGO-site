import { Header, Footer } from "../static";
import React from 'react'
import {Outlet} from "react-router-dom"

const Homelayout = () => {
  return (
    <>
    
        {/* <Header /> */}
        <Outlet />
        <Footer />
    </>
  )
}

export default Homelayout
