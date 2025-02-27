import { Homelayout } from "../components";
import Features from "../pages/Features";
import Home from "../pages/Home";
import Involve from "../pages/Involve";
import {createBrowserRouter} from "react-router-dom"

export  const Element = createBrowserRouter([
    {
        path: "/",
        element: <Homelayout />,
        children:[
            {
                index: true,
                element: <Home />
            },
            {
                path: "/features",
                element: <Features />
            },
            {
                path: "/about-us",
                // import your about us page here
                // element: 
            },
            {
                path: "/get-involve",
                 // import your get involve page here
                element: <Involve />
            },
            {
                path: "/contact-us",
                 // import your contact us page here
                // element: 
            }
        ]
    }
])