import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../../pages/Home'
import Desserts from '../../pages/Desserts'
import Confectioners from '../../pages/Confectioners'
import SingleProduct from '../../pages/SingleProduct'
import Confectioner from '../../pages/Confectioner'
import Articles from '../../pages/Articles'
import Article from '../../pages/Article'

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
        <Route
          path='confectioner'
          element={<Confectioner/>}
        />
        <Route
          path='articles'
          element={<Articles/>}
        />
        <Route
          path='article'
          element={<Article/>}
        />
    </Routes>
  )
}

export default Main