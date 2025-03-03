import { Homelayout } from "../components";
import Home from "../pages/Home/Home"
import {createBrowserRouter} from "react-router-dom"
import Features from "../pages/Features/Features"
import About from "../pages/About/About";
import React from "react";
import Involve from "../pages/Involve/Involve";
import Contact from "../pages/Donate/Donate"
import Donate from "../pages/Donate/Donate"
import Donateform from "../pages/Donate/DonateForm";
import Successpage from "../pages/Donate/Successpage";



export  const Element = createBrowserRouter([
    {
        path: "/",
        element: <Homelayout />,
        children:[
            {
               path: "/",
                element: <Home />
            },
            {
                path:"/about",
                element: <About />
            },
            {
                path: "/features",
                element: <Features />
            },
            {
                path: "/involve",
                element: <Involve/>
            },
            {
                path: "/contact",
                element: <Contact/>
            },
            {
                path: "/donate",
                element: <Donate/>
            },

        ],
    },
    {
        path: "/donate-form",
        element: <Donateform/>
    },
    {
        path: "/sucess",
        element: <Successpage/>
    },
])