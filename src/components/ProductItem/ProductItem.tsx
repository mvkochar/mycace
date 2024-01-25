import React from 'react'
import './ProductItem.css'

type ProductItemProps = {
  image: string
  price: string
  title: string
  fillings: number
}

const ProductItem = ({ image, price, title, fillings}: ProductItemProps) => {
  return (
    <div className='product-item d-f jc-sb'>
      <div><img src={image} alt="product-img" /></div>
      <div className="product-item-price">{price} грн</div>
      <div className="product-item-title">{title}</div>
      <div className="product-item-fillings">{fillings} варіанти начинок</div>
    </div>
  )
}

export default ProductItem