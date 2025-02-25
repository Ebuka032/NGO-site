import React from 'react'
import { Element } from './routes/router'
import { RouterProvider } from 'react-router-dom'

const App = () => {
  return (
    <RouterProvider router={Element} />

  )
}

export default App