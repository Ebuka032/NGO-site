import { Homelayout } from "../components";
import Home from "../pages/Home";
import {createBrowserRouter} from "react-router-dom"
import Features from "../pages/Features";
import index from "../pages/index";
import React from "react";



export  const Element = createBrowserRouter([
    {
        path: "/",
        element: <Homelayout />,
        children:[
            {
                index: index,
                element: <Home />
            },
            {
                path: "/features",
                element: <Features />
            }

        ]
    }
])