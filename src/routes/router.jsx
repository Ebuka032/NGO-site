import { Homelayout } from "../components";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
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
                path: "/contact",
                element: <Contact/>
            }
        ]
    }
])