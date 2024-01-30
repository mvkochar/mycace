import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../../pages/Home'
import Desserts from '../../pages/Desserts'
import Confectioners from '../../pages/Confectioners'
import SingleProduct from '../../pages/SingleProduct'

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
        <Route
          path='confectioners'
          element={<Confectioners/>}
        />
        <Route
          path='product'
          element={<SingleProduct/>}
        />
    </Routes>
  )
}

export default Main