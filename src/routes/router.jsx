import { Homelayout } from "../components";
import Home from "../pages/Home";
import {createBrowserRouter} from "react-router-dom"
import About from "../pages/About";

export  const Element = createBrowserRouter([
    {
        path: "/",
        element: <Homelayout />,
        children:[
            {
                index: "/",
                element: <Home />
            },
            {
                path: "/About",
                element: <About/>
            }
        ]
    }
])