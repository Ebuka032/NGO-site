import { Homelayout } from "../components";
import Features from "../pages/Features";
import Home from "../pages/Home";
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
            }
        ]
    }
])