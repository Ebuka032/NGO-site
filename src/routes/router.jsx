import { Homelayout } from "../components";
import Home from "../pages/Home";
import {createBrowserRouter} from "react-router-dom"


export  const Element = createBrowserRouter([
    {
        path: "/",
        element: <Homelayout />,
        children:[
            {
                index: index,
                element: <Home />
            },
          
        ]
    }
])