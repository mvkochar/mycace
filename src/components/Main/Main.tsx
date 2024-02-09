import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../../pages/Home'
import Desserts from '../../pages/Desserts'
import Confectioners from '../../pages/Confectioners'
import SingleProduct from '../../pages/SingleProduct'
import Confectioner from '../../pages/Confectioner'
import Articles from '../../pages/Articles'
import Article from '../../pages/Article'
import ShopRegistration from '../../pages/ShopRegistration'


type  MainProps = {
  handleHeaderType: (headerId: number) => void;
}

const Main = ({handleHeaderType}:MainProps) => {
  return (
    <Routes>
        <Route
            path='/'
            element={<Home handleHeaderType={handleHeaderType}/>}
        /> 
        <Route
          path='desserts'
          element={<Desserts handleHeaderType={handleHeaderType}/>}
        />
        <Route
          path='confectioners'
          element={<Confectioners handleHeaderType={handleHeaderType}/>}
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
          element={<Articles handleHeaderType={handleHeaderType}/>}
        />
        <Route
          path='article'
          element={<Article/>}
        />
        <Route
          path='shop-registration'
          element={<ShopRegistration handleHeaderType={handleHeaderType}/>}
        />
    </Routes>
  )
}

export default Main