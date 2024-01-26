import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../../pages/Home'
import Desserts from '../../pages/Desserts'

const Main = () => {
  return (
    <Routes>
        <Route
            path='/'
            element={<Home/>}
        /> 
        <Route
          path='desserts'
          element={<Desserts/>}
        />
    </Routes>
  )
}

export default Main