import { Homelayout } from "../components";
import Home from "../pages/Home";
import {createBrowserRouter} from "react-router-dom"
import Features from "../pages/Features";
import About from "../pages/About";
import React from "react";



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
            }

        ]
    }
])